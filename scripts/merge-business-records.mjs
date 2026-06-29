import fs from "fs";

const knowledgePath = "public/knowledge/nessieKnowledge.json";
const newRecordsPath = "data/output/business-records.json";

const knowledge = JSON.parse(fs.readFileSync(knowledgePath, "utf8"));
const newRecords = JSON.parse(fs.readFileSync(newRecordsPath, "utf8"));

const existingIds = new Set(knowledge.map(r => r.id));
const merged = [...knowledge];

for (const record of newRecords) {
  if (!existingIds.has(record.id)) {
    merged.push(record);
  }
}

fs.writeFileSync(knowledgePath, JSON.stringify(merged, null, 2));
console.log(`Merged ${newRecords.length} records. Total records now: ${merged.length}`);
