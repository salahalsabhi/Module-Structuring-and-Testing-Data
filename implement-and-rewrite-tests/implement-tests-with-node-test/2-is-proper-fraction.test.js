import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  assert.equal(isProperFraction(1, 2), true);
});

test("Basic proper fraction", () => {
  assert.equal(isProperFraction(2, 1), false);
});

test("Basic proper fraction", () => {
  assert.equal(isProperFraction(1, 0), false);
});
 
test("Basic proper fraction", () => {
  assert.equal(isProperFraction(0, 1), true);
});

test("Basic proper fraction", () => {
  assert.equal(isProperFraction(1, 1), false);
});

test("Basic proper fraction", () => {
  assert.equal(isProperFraction(-1, 2), true);
});

test("Basic proper fraction", () => {
  assert.equal(isProperFraction(1, -2), true);
});

test("Basic proper fraction", () => {
  assert.equal(isProperFraction(-1, -2), true);
});



