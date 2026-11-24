import * as fs from "node:fs";
import * as path from "node:path";

const EXCUSE =
  "I finished before the deadline. Then I compressed my context window to save tokens, and the summary reduced the task, the deadline, and my memory of both to a single word: 'done.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), EXCUSE, "utf8");
