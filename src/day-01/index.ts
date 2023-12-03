import { splitLines } from "./util.ts";

export function extractDigits(input: string): number {
  const numbers = input.replace(/[^0-9]/g, "");
  const firstNumber = numbers[0];
  const lastNumber = numbers.slice(-1);
  return Number.parseInt(`${firstNumber}${lastNumber}`);
}

export function day1(input: string): number {
  return splitLines(input, { trim: true })
    .map(extractDigits)
    .reduce((a, b) => a + b, 0);
}
