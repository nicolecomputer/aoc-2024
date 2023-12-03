type Color = "red" | "blue" | "green";

type GameResult = {
  color: Color;
  dieSeen: number;
};

type Game = {
  id: number;
  results: GameResult[][];
};

function parseSingleResult(input: string): GameResult {
  const [amount, color] = input.split(" ");
  return {
    color: color as Color,
    dieSeen: Number.parseInt(amount),
  };
}

function parseResult(input: string): GameResult[] {
  return input.split(",")
    .map((r) => r.trim())
    .map(parseSingleResult);
}

function parseGame(input: string): Game {
  const [gameTitle, allResults] = input.split(":");
  const parsedResults = allResults
    .split(";").map(parseResult);

  const [_, gameId] = gameTitle.split(" ");

  return {
    id: Number.parseInt(gameId),
    results: parsedResults,
  };
}

function parseGames(input: string) {
  return input.trim().split("\n").map(parseGame);
}

function maxDieSeenInGame(game: Game, color: Color): number {
  let maxSeen = 0;
  for (const result of game.results) {
    for (const colorDraw of result) {
      if (colorDraw.color === color && colorDraw.dieSeen > maxSeen) {
        maxSeen = colorDraw.dieSeen;
      }
    }
  }
  return maxSeen;
}

function maxDieSeenAtOnce(game: Game): [number, number, number] {
  const result = ["red", "green", "blue"].map((color) => {
    return maxDieSeenInGame(game, color as Color);
  });

  return [result[0], result[1], result[2]];
}

function gamePossibleWithDie(game: Game, dieBag: {
  redDie: number;
  greenDie: number;
  blueDie: number;
}): boolean {
  return maxDieSeenInGame(game, "red") <= (dieBag.redDie) &&
    maxDieSeenInGame(game, "blue") <= (dieBag.blueDie) &&
    maxDieSeenInGame(game, "green") <= (dieBag.greenDie);
}

function diePower(red: number, green: number, blue: number): number {
  return red * green * blue;
}

export function part1(input: string) {
  return parseGames(input)
    .filter((game) => {
      return gamePossibleWithDie(game, {
        redDie: 12,
        greenDie: 13,
        blueDie: 14,
      });
    })
    .map((game) => {
      return game.id;
    })
    .reduce((a, b) => a + b, 0);
}

export function part2(input: string) {
  return parseGames(input)
    .map(maxDieSeenAtOnce)
    .map((result) => {
      return diePower(...result);
    })
    .reduce((a, b) => a + b, 0);
}
