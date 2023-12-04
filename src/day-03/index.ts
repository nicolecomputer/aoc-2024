export function part1(input: string): number {
    const partsGrid = parseInput(input);
    console.log(partsGrid);
    return 0;
}

export function part2(input: string): number {
    return 0;
}

function parseInput(input: string): string[][] {
    return input.split("\n")
        .map((i) => {
            return i.split("");
        });
}

function touchesPart(
    grid: string[][],
    startingLocation: [number, number],
    endingLocation: [number, number],
): boolean {
    return false;
}

const partsMatch = new RegExp(/[^0-9\.]/);

/*
- Find all numbers
- Figure out the space they take up
- Check if they have any parts connected to them
- If they don't then discard
*/
