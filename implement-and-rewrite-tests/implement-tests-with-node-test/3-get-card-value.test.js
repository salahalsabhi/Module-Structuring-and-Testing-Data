import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Valid ten", () => {
  assert.equal(getCardValue("10♥"), 10);
});

test("Ace returns 11", () => {
  assert.equal(getCardValue("A♦"), 11);
});

test("Face cards return 10", () => {
  assert.equal(getCardValue("J♣"), 10);
  assert.equal(getCardValue("Q♠"), 10);
  assert.equal(getCardValue("K♥"), 10);
});

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Expected a number followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});

test("Missing suit throws", () => {
  assert.throws(() => getCardValue("A"), /Expected a number followed by a suit/);
});


// TODO: What other invalid card cases can you think of?

test("Empty string throws", () => {
  assert.throws(
    () => getCardValue(""),
    /Expected a number followed by a suit/
  );
});

test("Suit only throws", () => {
  assert.throws(
    () => getCardValue("♠"),
    /Expected a number followed by a suit/
  );
});

test("Invalid rank throws", () => {
  assert.throws(
    () => getCardValue("1♠"),
    /Expected a number followed by a suit/
  );
});

test("Invalid suit throws", () => {
  assert.throws(
    () => getCardValue("9X"),
    /Expected a number followed by a suit/
  );
});

test("Rank with no suit character throws", () => {
  assert.throws(
    () => getCardValue("10"),
    /Expected a number followed by a suit/
  );
});
