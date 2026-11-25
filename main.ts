// The Funniest Office Joke, Judged Head to Head
// Writes a single one-line office joke to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I hit reply-all to ask them to stop replying-all, and now 400 people are replying-all to agree with me.";

if (joke.length < 1 || joke.length > 200 || !joke.trim()) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${joke.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`wrote /output/entry.txt (${joke.length} chars)`);
console.log(joke);
