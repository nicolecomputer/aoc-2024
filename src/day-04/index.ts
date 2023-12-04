function parseNumberString(input: string): number[] {
    return input.trim()
        .split(" ")
        .filter((i) => i.length > 0)
        .map((i) => {
            return Number.parseInt(i);
        });
}

function numberOfCorrectNumbers(input: string): number {
    const [_, numbers] = input.split(":");
    const [winngNumbersString, yourNumbersString] = numbers.trim().split("|");
    const yourNumbers = parseNumberString(yourNumbersString);
    const winningNumbers = parseNumberString(winngNumbersString);

    const winnings = yourNumbers.filter((n) => winningNumbers.includes(n));

    return winnings.length;
}

export function scoreCard(input: string): number {
    const winnings = numberOfCorrectNumbers(input);

    if (winnings == 0) {
        return 0;
    }
    return Math.pow(2, winnings - 1);
}

export function part1(input: string): number {
    return input.trim().split("\n").map(scoreCard).reduce((a, b) => a + b, 0);
}

export function part2(input: string): number {
    const games = input.trim().split("\n").map(numberOfCorrectNumbers);
    const gameWon = games.map((i) => i > 0);
    const copies = Array(games.length).fill(1);

    for (let gameId = 0; gameId < games.length; gameId++) {
        const points = games[gameId];
        for (let i = 1; i < (points + 1); i++) {
            copies[gameId + i] += copies[gameId] * 1;
        }
    }

    const score = copies.reduce((a, b) => a + b, 0);

    return score;
}
