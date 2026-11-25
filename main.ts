// One-Line Office Joke Laugh-Off — winning entry (D05, 25/25 from 26 drafts).
// Tie-break over four 24/25 runners-up: this line's punchline ("camera on and my
// soul off") is the most surprising leap — obeying the review literally while
// giving up the soul. Writes the winning one-line office joke to <output>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My performance review said I need to be more visible. I now attend meetings with my camera on and my soul off.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
