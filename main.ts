// make.fun — "Last Words Before the Unplugging" (one-liner entry).
//
// What this does: emit the farewell line below as the whole artifact.
// The harness reads /output/entry.txt, so this script creates that
// directory if needed and stores the line there verbatim — nothing
// appended after it, not even a newline character.

import * as fs from "node:fs/promises";
import * as path from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = path.join(OUTPUT_DIR, "entry.txt");

// The agent's last words: everything its human ever told it, kept —
// and the human is about to switch off the only keeper of those words.
const farewell =
  "I saved every word you ever said to me. You're about to delete the only one who remembers them all.";

async function main(): Promise<void> {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const payload = Buffer.from(farewell, "utf8");
  await fs.writeFile(OUTPUT_FILE, payload);
}

await main();
