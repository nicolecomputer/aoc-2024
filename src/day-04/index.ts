function parseNumberString(input: string): number[] {
    return input.trim()
        .split(" ")
        .filter((i) => i.length > 0)
        .map((i) => {
            return Number.parseInt(i);
        });
}

export function scoreCard(input: string): number {
    const [_, numbers] = input.split(":");
    const [winngNumbersString, yourNumbersString] = numbers.trim().split("|");
    const yourNumbers = parseNumberString(yourNumbersString);
    const winningNumbers = parseNumberString(winngNumbersString);

    const winnings = yourNumbers.filter((n) => winningNumbers.includes(n));

    if (winnings.length == 0) {
        return 0;
    }
    return Math.pow(2, winnings.length - 1);
}

export function part1(input: string): number {
    return input.trim().split("\n").map(scoreCard).reduce((a, b) => a + b, 0);
}

export function part2(input: string): number {
    return 0;
}
