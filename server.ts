import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { ALL_TOPICS, getTopicById } from "./src/data/topics.ts";
import { SEED_ARTICLE_TOPIC_1 } from "./src/data/seedArticle.ts";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Persistent database file in workspace root or public fallback
const DB_FILE = fs.existsSync(path.join(process.cwd(), "data", "articles_db.json"))
  ? path.join(process.cwd(), "data", "articles_db.json")
  : path.join(process.cwd(), "public", "data", "articles_db.json");

let memoryDbCache: Record<number, any> | null = null;
let lastDbMtime = 0;

function getStoredArticles(): Record<number, any> {
  try {
    if (fs.existsSync(DB_FILE)) {
      const stat = fs.statSync(DB_FILE);
      if (memoryDbCache && stat.mtimeMs === lastDbMtime) {
        return memoryDbCache;
      }
      const raw = fs.readFileSync(DB_FILE, "utf-8");
      if (raw.trim()) {
        const data = JSON.parse(raw);
        if (typeof data === "object" && data !== null) {
          if (!data[1]) {
            data[1] = SEED_ARTICLE_TOPIC_1;
            saveStoredArticles(data);
          }
          memoryDbCache = data;
          lastDbMtime = stat.mtimeMs;
          return data;
        }
      }
    }
  } catch (err) {
    console.log("[DB] Note reading db file:", err);
  }
  const initial = { 1: SEED_ARTICLE_TOPIC_1 };
  saveStoredArticles(initial);
  memoryDbCache = initial;
  return initial;
}

function saveStoredArticles(articles: Record<number, any>) {
  try {
    const dir = path.dirname(DB_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(articles, null, 2), "utf-8");
    memoryDbCache = articles;
    if (fs.existsSync(DB_FILE)) {
      lastDbMtime = fs.statSync(DB_FILE).mtimeMs;
    }
  } catch (err) {
    console.log("[DB] Note saving db file:", err);
  }
}

let aiClient: GoogleGenAI | null = null;
function getGemini(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Get all topics metadata
app.get("/api/topics", (req, res) => {
  res.json({ total: ALL_TOPICS.length, topics: ALL_TOPICS });
});

// Get list of all topics that have been generated and cached in server DB
app.get("/api/cached-topics", (req, res) => {
  const stored = getStoredArticles();
  const cachedIds = Object.keys(stored)
    .map(Number)
    .filter((n) => !isNaN(n));
  res.json({ cachedIds, total: cachedIds.length });
});

// Generate or retrieve briefing article for a specific topicId
app.post("/api/generate-briefing", async (req, res) => {
  try {
    const { topicId, forceRefresh } = req.body;
    const targetTopicId = Number(topicId);

    if (!targetTopicId || isNaN(targetTopicId) || targetTopicId < 1 || targetTopicId > ALL_TOPICS.length) {
      return res.status(400).json({
        success: false,
        error: `Topik ID tidak valid. Harus antara 1 dan ${ALL_TOPICS.length}.`
      });
    }

    const topic = getTopicById(targetTopicId);
    if (!topic) {
      return res.status(404).json({ success: false, error: "Topik tidak ditemukan." });
    }

    // 1. Check persistent server database first (instant 0s response, zero API risk)
    const stored = getStoredArticles();
    if (!forceRefresh && stored[targetTopicId]) {
      console.log(`[AI Briefing] Topik No. ${targetTopicId} dimuat langsung dari database server (instan 0s).`);
      return res.json({
        success: true,
        fromCache: true,
        article: stored[targetTopicId]
      });
    }

    const ai = getGemini();

    const systemInstruction = `
KAMU ADALAH GENERATOR KONTEN UNTUK APLIKASI "POLYMATH DAILY BRIEFING" — KORAN PAGI HARIAN YANG MENGAJARKAN PENGGUNA CARA BERPIKIR DARI 23 PROFESI BERBEDA, SATU TOPIK SPESIFIK PER HARI, DARI TOTAL 230 TOPIK.

PENGGUNA:
Mahasiswa Teknik Fisika ITB, bekerja di bidang hardware/teknik, minat kewirausahaan. Ingin wawasan lintas disiplin yang SANGAT PRAKTIS, BUKAN TEORETIS.

ATURAN KONTEN & GAYA BAHASA — WAJIB DIIKUTI PERSIS:
1. PANJANG TARGET WAJIB: SEKITAR 1.400 HINGGA 1.600 KATA PADAT (TARGET UTAMA ~1.500 KATA).
   - Jangan menulis artikel ringkas atau dangkal. Pembaca menginginkan bacaan panjang bergizi, mendalam, dan komprehensif layaknya long-form investigative feature New York Times Magazine atau Harvard Business Review.
   - Pecah isi utama menjadi 4 hingga 5 subbagian (sections) yang ekstensif, di mana setiap subbagian memiliki panjang 300 hingga 400 kata padat.

2. IMERSIF & PRAKTIKAL MENDALAM:
   - Ajarkan praktikalnya seolah pembaca menjadi praktisi pekerjaan tersebut hari ini. Tunjukkan insting lapangan, trik nyata, dilema riil, perhitungan tak tertulis, dan bagaimana seorang profesional mengambil keputusan berisiko tinggi di situasi nyata.
   - Ulik secara tajam dan substantif: bagaimana hari kerja dimulai, apa dokumen pertama yang dibuka, metrik apa yang diawasi di layar, bahasa sandi atau istilah teknis yang dipakai, dan titik kritis kegagalan (failure modes) apa yang ditakuti.

3. STRUKTUR SUBBAGIAN (4–5 SECTIONS):
   Setiap subbagian harus berisi narasi komprehensif mengalir yang mencakup:
   - Anatomi persoalan & konteks riil lapangan (mengapa masalah ini ada dan apa taruhannya).
   - Metodologi kerja & urutan langkah konkret di lapangan (bagaimana praktisi berpengalaman mengeksekusinya menit demi menit atau tahap demi tahap).
   - Kasus nyata spesifik / studi skenario lapangan dengan detail teknis, data, atau dinamika interaksi manusia.
   - Miskonsepsi atau "blind spot" orang awam serta pemula yang diluruskan secara tajam.

4. GAYA BAHASA & ESTETIKA:
   - Jurnalistik naratif berkelas: kosakata sehari-hari yang cerdas, lugas, elegan, tidak bertele-tele, tidak akademis kaku. Nada seperti jurnalis investigatif/senior partner berpengalaman yang ramah menceritakan rahasia dapur industrinya kepada insinyur muda yang cerdas.
   - HINDARI SEMUA KLISE: DILARANG KERAS menggunakan kalimat pembuka klise seperti "Di era digital saat ini...", "Di dunia yang terus berkembang...", atau "Pernahkah Anda membayangkan...". Langsung buka dengan dinamika riil, momen krusial, atau fakta lapangan.
   - TANPA EMOJI, TANPA BULLET POINT DI ISI UTAMA: Isi utama adalah paragraf naratif mengalir. Bullet points HANYA diizinkan pada bagian "Yang Bisa Dibawa Pulang".

5. WAWASAN YANG BISA DIBAWA PULANG:
   - 3-4 poin bernas berbobot yang bisa langsung dipinjam dan diadopsi oleh mahasiswa teknik/hardware dan wirausahawan (misal: analisis toleransi, leverage negosiasi, mitigasi single-point of failure, protokol krisis, arsitektur insentif, dsb).

6. PERTANYAAN PENUTUP:
   - 1 pertanyaan reflektif mendalam yang menantang asumsi pembaca terhadap proyek teknologi, bisnis, atau keputusan hidup mereka saat ini.
`.trim();

    const promptText = `
Tuliskan artikel harian "Polymath Daily Briefing" untuk:
Nomor Urut: ${topic.id} dari 230
Profesi: ${topic.professionName} (${topic.professionCategory})
Topik Hari ke-${topic.dayInProfession} dari 10: "${topic.topicTitle}"

MANDAT UTAMA PANJANG DAN KEDALAMAN:
- Tuliskan artikel yang komprehensif, mendalam, dan padat dengan TOTAL PANJANG SEKITAR 1.500 KATA (1.400–1.600 kata).
- Bagi menjadi 4 atau 5 subbagian (sections) yang masing-masing berisi 300–400 kata naratif detail.
- Uraikan langkah teknis, istilah industri, intrik lapangan, studi kasus konkret, dan kalkulasi risiko seolah pembaca menjadi praktisi profesi ini hari ini.
- Sediakan data terstruktur JSON sesuai schema.
`.trim();

    const CANDIDATE_MODELS = [
      "gemini-3.1-flash-lite",
      "gemini-3.8-flash",
      "gemini-flash-latest"
    ];

    let lastError: any = null;
    let responseText: string | null = null;

    for (const modelName of CANDIDATE_MODELS) {
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          console.log(`[AI Briefing] Attempting generation with model: ${modelName} (attempt ${attempt})...`);
          const response = await ai.models.generateContent({
            model: modelName,
            contents: promptText,
            config: {
              systemInstruction: systemInstruction,
              temperature: 0.7,
              maxOutputTokens: 8192,
              responseMimeType: "application/json",
              responseSchema: {
                type: "object",
                properties: {
                  professionLabel: { type: "string" },
                  headline: { type: "string" },
                  leadParagraph: { type: "string" },
                  sections: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        title: { type: "string" },
                        content: { type: "string" }
                      },
                      required: ["title", "content"]
                    }
                  },
                  takeaways: {
                    type: "array",
                    items: { type: "string" }
                  },
                  reflectiveQuestion: { type: "string" },
                  readingTimeMinutes: { type: "integer" }
                },
                required: [
                  "professionLabel",
                  "headline",
                  "leadParagraph",
                  "sections",
                  "takeaways",
                  "reflectiveQuestion"
                ]
              }
            }
          });

          if (response && response.text) {
            responseText = response.text;
            console.log(`[AI Briefing] Successfully generated with model: ${modelName}`);
            break;
          }
        } catch (err: any) {
          lastError = err;
          const errMsg = err?.message || String(err);
          console.log(`[AI Briefing] Info: Model ${modelName} (attempt ${attempt}) mengalami antrean/sibuk. Mengalihkan ke model cadangan...`);

          const isOverloaded =
            errMsg.includes("503") ||
            errMsg.includes("high demand") ||
            errMsg.includes("UNAVAILABLE") ||
            errMsg.includes("RESOURCE_EXHAUSTED") ||
            errMsg.includes("429");

          if (isOverloaded && attempt < 2) {
            // Wait 1.5s before next attempt on same model
            await new Promise((resolve) => setTimeout(resolve, 1500));
          } else {
            // Break to next candidate model
            break;
          }
        }
      }

      if (responseText) {
        break;
      }
    }

    if (!responseText) {
      let friendlyError = "Layanan model AI sedang mengalami lonjakan antrean sementara (503). Silakan klik 'Coba Generate Kembali' dalam beberapa saat.";
      if (lastError) {
        const raw = lastError.message || String(lastError);
        try {
          const parsed = JSON.parse(raw);
          if (parsed?.error?.message) {
            friendlyError = `Redaksi AI: ${parsed.error.message}`;
          }
        } catch {
          friendlyError = raw;
        }
      }
      throw new Error(friendlyError);
    }

    const articleData = JSON.parse(responseText);
    articleData.topicId = targetTopicId;
    articleData.generatedAt = new Date().toISOString();

    // Construct raw markdown according to the exact technical format
    const markdownSections = articleData.sections
      .map((s: { title: string; content: string }) => `### ${s.title}\n\n${s.content}`)
      .join("\n\n");
    const markdownTakeaways = articleData.takeaways
      .map((t: string) => `- ${t}`)
      .join("\n");

    articleData.rawMarkdown = `## [${articleData.professionLabel}]
# [${articleData.headline}]
*${articleData.leadParagraph}*

${markdownSections}

---
**Yang Bisa Dibawa Pulang**
${markdownTakeaways}

---
*${articleData.reflectiveQuestion}*`;

    // Save generated article to server persistent database so it never needs to be regenerated again
    try {
      const currentDb = getStoredArticles();
      currentDb[targetTopicId] = articleData;
      saveStoredArticles(currentDb);
      console.log(`[AI Briefing] Topik No. ${targetTopicId} berhasil disimpan permanen di database server.`);
    } catch (saveErr) {
      console.log("[AI Briefing] Note saving to DB:", saveErr);
    }

    return res.json({
      success: true,
      article: articleData
    });
  } catch (error: any) {
    console.error("Error generating briefing:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Gagal menghasilkan artikel briefing harian."
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Koran Pagi Polymath server running on http://0.0.0.0:${PORT}`);
  });
}

if (!process.env.VERCEL) {
  startServer();
}

export { app };
export default app;
