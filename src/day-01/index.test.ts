import {
    assertEquals,
} from "https://deno.land/std@0.208.0/assert/mod.ts";

import { extractDigits, day1 } from './index.ts';

Deno.test("extractDigits pulls out the first and last digit", () => {
    assertEquals(extractDigits("1abc2"), 12)
    assertEquals(extractDigits("pqr3stu8vwx"), 38)
})

Deno.test("extractDigits ignores multiple digits and only uses the first and last digits", () => {
    assertEquals(extractDigits("a1b2c3d4e5f"), 15);
})

Deno.test('extractDigits repeats the only digit if there is only 1 digit', () => {
    assertEquals(extractDigits("treb7uchet"), 77)
})

Deno.test('day1 extracts digits and sums them', () => {
    const data =
        `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`

    assertEquals(day1(data), 142);

})
