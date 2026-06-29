import fs from "fs";

const inputPath = "data/inbox/businesses.csv";
const outputPath = "data/output/business-records.json";

function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/);
  const headers = lines.shift().split(",").map(h => h.trim());

  return lines.map(line => {
    const values = line.split(",").map(v => v.trim());
    return Object.fromEntries(headers.map((h, i) => [h, values[i] || ""]));
  });
}

const rows = parseCsv(fs.readFileSync(inputPath, "utf8"));

const records = rows.map(row => {
  const id = slugify(`${row.name}-${row.location || row.region}`);

  return {
    id,
    category: row.category || "business",
    region: row.region || "Highlands",
    title: row.name,
    summary: `${row.name} is a ${row.category || "business"} in ${row.location || row.region}, useful for visitors exploring the Scottish Highlands.`,
    keywords: [
      row.name,
      row.category,
      row.region,
      row.location,
      "Highlands",
      "visitor",
      "local business"
    ].filter(Boolean),
    content: {
      description: row.notes || `${row.name} is a local ${row.category || "business"} in ${row.location || row.region}.`,
      history: "",
      local_tip: "Check the official website or contact the business directly for current opening times, availability and booking details.",
      best_time: "Check current opening times before travelling.",
      common_mistake: "Assuming opening hours, menus or availability are always the same — confirm before visiting.",
      transport_note: row.location ? `${row.location}, ${row.region}.` : row.region,
      booking_advice: "Check directly with the business before visiting or booking.",
      price_context: "Check directly for current pricing.",
      route_advice: ""
    },
    commercial: {
      partner: false,
      featured: false,
      priority: 0,
      lead_enabled: false,
      booking_url: row.website || "",
      affiliate_url: "",
      discount_code: "",
      tracking_id: id,
      package: "free",
      last_updated: new Date().toISOString().slice(0, 10)
    }
  };
});

fs.writeFileSync(outputPath, JSON.stringify(records, null, 2));
console.log(`Created ${records.length} business records at ${outputPath}`);
