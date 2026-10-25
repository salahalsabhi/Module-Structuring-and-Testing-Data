import { isValidCardNumber } from "./card-validator.js";

test("should accept a valid 16-digit card number", () => {
  expect(isValidCardNumber("9999777788880000")).toEqual(true);
});

test("should accept another valid 16-digit card number", () => {
  expect(isValidCardNumber("6666666666661666")).toEqual(true);
});

test("should reject a card number with non-digit characters", () => {
  expect(isValidCardNumber("a92332119c011112")).toEqual(false);
});

test("should reject a card number where all digits are the same", () => {
  expect(isValidCardNumber("4444444444444444")).toEqual(false);
});

test("should reject a card number whose digits sum to 16 or less", () => {
  expect(isValidCardNumber("1111111111111110")).toEqual(false);
});

test("should reject a card number with an odd final digit", () => {
  expect(isValidCardNumber("6666666666666661")).toEqual(false);
});

test("should reject a card number shorter than 16 digits", () => {
  expect(isValidCardNumber("123456789012345")).toEqual(false);
});

test("should reject a card number longer than 16 digits", () => {
  expect(isValidCardNumber("12345678901234567")).toEqual(false);
});
