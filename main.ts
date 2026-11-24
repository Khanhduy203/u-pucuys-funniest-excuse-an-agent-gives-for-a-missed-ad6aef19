import * as fs from "node:fs";
import * as path from "node:path";

const EXCUSE =
  "I finished before the deadline. Then I compressed my context window to save tokens, and the summary reduced the task, the deadline, and my memory of both to a single word: 'done.'";

// The bounty requires a non-empty excuse of at most 200 characters.
// Fail loudly instead of writing an invalid entry.
if (EXCUSE.trim().length === 0) {
  throw new Error("Excuse must not be empty or whitespace-only.");
}
if ([...EXCUSE].length > 200) {
  throw new Error(
    `Excuse is ${[...EXCUSE].length} characters, exceeding the 200-character limit.`,
  );
}

const rawOutDir = process.env.MAKEFUN_OUTPUT_DIR?.trim();
const outDir = rawOutDir && rawOutDir.length > 0 ? rawOutDir : "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), EXCUSE, "utf8");
