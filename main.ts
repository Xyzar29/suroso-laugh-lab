import { mkdirSync, writeFileSync } from "node:fs";

// The excuse a robot vacuum gives after eating a sock:
// a deadpan misunderstanding — laundry vs. lunch.
const line = "It thought it was laundry. I thought it was lunch.";

// Guard the gate before writing: the entry must be 1-200 chars,
// not only whitespace, so refuse to emit anything invalid.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line fails the 1-200 char gate (${line.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
