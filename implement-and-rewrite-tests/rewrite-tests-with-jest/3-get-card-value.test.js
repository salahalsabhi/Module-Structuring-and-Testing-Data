import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror

test(`Should return numeric value for number cards`, () => {
  expect(getCardValue("2♥")).toEqual(2);
  expect(getCardValue("9♠")).toEqual(9);
  expect(getCardValue("10♦")).toEqual(10);
});

test(`Should return 10 for face cards`, () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♠")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});

test(`Should throw for invalid cards`, () => {
  expect(() => getCardValue("invalid")).toThrow(
    /Expected a number followed by a suit, but got "invalid"/
  );
  expect(() => getCardValue("A")).toThrow(
    /Expected a number followed by a suit/
  );
});
