import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ALL_TOPICS, getTopicById } from "../src/data/topics.ts";
import { SEED_ARTICLE_TOPIC_1 } from "../src/data/seedArticle.ts";
import { ArticleData } from "../src/types.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, "..", "data", "articles_db.json");

// Load existing articles
let existingDb: Record<number, ArticleData> = {};
try {
  if (fs.existsSync(DB_FILE)) {
    const raw = fs.readFileSync(DB_FILE, "utf-8");
    if (raw.trim()) {
      existingDb = JSON.parse(raw);
    }
  }
} catch (e) {
  console.log("Starting fresh DB load");
}

if (!existingDb[1]) {
  existingDb[1] = SEED_ARTICLE_TOPIC_1;
}

// Helper to calculate reading time
function calculateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(6, Math.round(words / 180));
}

// Format raw markdown
function buildRawMarkdown(article: Omit<ArticleData, "rawMarkdown">): string {
  const sectionsMd = article.sections
    .map((s) => `### ${s.title}\n\n${s.content}`)
    .join("\n\n");
  const takeawaysMd = article.takeaways.map((t) => `- ${t}`).join("\n");

  return `## [${article.professionLabel}]
# [${article.headline}]
*${article.leadParagraph}*

${sectionsMd}

---
**Yang Bisa Dibawa Pulang**
${takeawaysMd}

---
*${article.reflectiveQuestion}*`;
}

export { existingDb, DB_FILE, calculateReadingTime, buildRawMarkdown };
export type { ArticleData };
