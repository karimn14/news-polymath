import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ALL_TOPICS } from "../src/data/topics.ts";
import { existingDb, DB_FILE } from "./articleBuilderBase.ts";
import type { ArticleData } from "../src/types.ts";
import { generateCluster1Article } from "./generators/cluster1.ts";
import { generateCluster2Article } from "./generators/cluster2.ts";
import { generateCluster3Article } from "./generators/cluster3.ts";
import { generateCluster4Article } from "./generators/cluster4.ts";
import { generateCluster5Article } from "./generators/cluster5.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  console.log("=== POLYMATH DAILY BRIEFING: BATCH DATABASE GENERATOR ===");
  console.log(`Total topics to ensure in database: ${ALL_TOPICS.length}`);
  console.log(`Initially stored topics in DB: ${Object.keys(existingDb).length}`);

  let generatedCount = 0;
  let preservedCount = 0;

  for (const topic of ALL_TOPICS) {
    const id = topic.id;
    const profId = topic.professionId;

    // If already generated and complete in DB, preserve it
    if (existingDb[id] && existingDb[id].sections && existingDb[id].sections.length >= 3) {
      preservedCount++;
      continue;
    }

    let article: ArticleData;
    if (profId >= 1 && profId <= 5) {
      article = generateCluster1Article(topic);
    } else if (profId >= 6 && profId <= 10) {
      article = generateCluster2Article(topic);
    } else if (profId >= 11 && profId <= 15) {
      article = generateCluster3Article(topic);
    } else if (profId >= 16 && profId <= 19) {
      article = generateCluster4Article(topic);
    } else {
      article = generateCluster5Article(topic);
    }

    existingDb[id] = article;
    generatedCount++;
  }

  // Ensure output directory exists
  const dir = path.dirname(DB_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write complete database
  fs.writeFileSync(DB_FILE, JSON.stringify(existingDb, null, 2), "utf-8");

  const totalKeys = Object.keys(existingDb).length;
  const fileSizeMb = (fs.statSync(DB_FILE).size / (1024 * 1024)).toFixed(2);

  console.log("\n--- GENERATION SUMMARY ---");
  console.log(`Preserved existing articles: ${preservedCount}`);
  console.log(`Newly generated articles: ${generatedCount}`);
  console.log(`Total ready articles in database: ${totalKeys} / ${ALL_TOPICS.length}`);
  console.log(`Database file path: ${DB_FILE}`);
  console.log(`Database file size: ${fileSizeMb} MB`);

  if (totalKeys === ALL_TOPICS.length) {
    console.log("SUCCESS: All 230 newspaper editions are generated and ready in the database!");
  } else {
    console.warn(`WARNING: Expected ${ALL_TOPICS.length} topics but have ${totalKeys}.`);
  }
}

main().catch((err) => {
  console.error("FATAL ERROR generating database:", err);
  process.exit(1);
});
