import { part1, part2 } from "./index.ts";

async function main() {
    const inputPath = Deno.args[0];
    const data = await Deno.readTextFile(inputPath);

    const part1Answer = part1(data);
    console.log(`Part 1: ${part1Answer}`);

    const part2Answer = part2(data);
    console.log(`Part 2: ${part2Answer}`);
}

main();
