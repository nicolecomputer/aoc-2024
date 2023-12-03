import { day1 } from "./index.ts";

async function main() {
  const inputPath = Deno.args[0];
  const data = await Deno.readTextFile(inputPath);

  const part1 = day1(data);
  console.log(`Part 1: ${part1}`);
}

main();
