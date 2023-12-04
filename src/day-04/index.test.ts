import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

import { part1, scoreCard } from "./index.ts";

const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

Deno.test("part1", () => {
    assertEquals(part1(input), 13);
});

Deno.test("scoreCard should score a card string example 1", () => {
    assertEquals(
        scoreCard("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"),
        8,
    );
});

Deno.test("scoreCard should score a card string example 2", () => {
    assertEquals(
        scoreCard("Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19"),
        2,
    );
});

Deno.test("scoreCard should score a card string example 3", () => {
    assertEquals(
        scoreCard("Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1"),
        2,
    );
});

Deno.test("scoreCard should score a card string example 4", () => {
    assertEquals(
        scoreCard("Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83"),
        1,
    );
});

Deno.test("scoreCard should score a card string example 5", () => {
    assertEquals(
        scoreCard("Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36"),
        0,
    );
});

Deno.test("scoreCard should score a card string example 6", () => {
    assertEquals(
        scoreCard("Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11"),
        0,
    );
});

// Deno.test("part2", () => {
//     assertEquals(part2(input), 2286);
// });
