// The Houseplant Out-of-Office — make.fun entry
// Writes one out-of-office auto-reply, as if a houseplant sent it,
// to /output/entry.txt. The line must be 1-120 UTF-8 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office. I've been holding this windowsill down since March with no water, no raise, and one (1) sunbeam.";

// The sealed scorer only judges entries of 1-120 characters, so refuse
// to write anything outside that range rather than submit an invalid line.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`Entry is ${ENTRY.length} characters; must be 1-120.`);
}

// The grader mounts /output and runs this as an unprivileged user.
// Create the directory if it is missing; never remove the directory
// itself, only write the entry file inside it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

console.log(ENTRY);
console.log(`(${ENTRY.length} characters)`);
