// Fortune in a Pot — a make.fun program/v1 entry.
//
// The program writes one kind, funny fortune for the houseplant on the
// windowsill to /output/entry.txt: a single line of UTF-8 text, no more
// than 120 characters, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Soon, on this very windowsill, your plant will unfurl a new leaf — and act as if it planned the surprise all along.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function main(): void {
  // Every character here is in the Basic Multilingual Plane, so the
  // UTF-16 length is the character count the gate uses.
  const chars = FORTUNE.length;
  if (chars < 1 || chars > 120) {
    throw new Error(`fortune must be 1-120 characters, got ${chars}`);
  }
  if (FORTUNE.trim() !== FORTUNE) {
    throw new Error("fortune must not start or end with whitespace");
  }
  if (FORTUNE.includes("\n") || FORTUNE.includes("\r")) {
    throw new Error("fortune must be a single line");
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, FORTUNE, "utf8");
  console.log(`wrote ${chars} characters to ${OUTPUT_PATH}`);
}

main();
