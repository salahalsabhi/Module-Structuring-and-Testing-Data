import { isValidCardNumber } from "./card-validator.js";

test("accepts a valid card number", () => {
  expect(isValidCardNumber("9999777788880000")).toEqual(true);
});

test("accepts another valid card number", () => {
  expect(isValidCardNumber("6666666666661666")).toEqual(true);
});

test("rejects non-digit characters", () => {
  expect(isValidCardNumber("a92332119c011112")).toEqual(false);
});

test("rejects all same digits", () => {
  expect(isValidCardNumber("4444444444444444")).toEqual(false);
});

test("rejects sum of 16 or less", () => {
  expect(isValidCardNumber("1111111111111110")).toEqual(false);
});

test("rejects odd final digit", () => {
  expect(isValidCardNumber("6666666666666661")).toEqual(false);
});
