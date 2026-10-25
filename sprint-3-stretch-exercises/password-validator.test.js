/*
Password Validation
Write a program that should check if a password is valid
and returns a boolean
To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array.
You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
import { isValidPassword } from "./password-validator.js";

test("should accept a password that meets all rules", () => {
  expect(isValidPassword("Abc1!")).toEqual(true);
});

test("should reject a password shorter than 5 characters", () => {
  // only length fails: has upper, lower, digit, symbol
  expect(isValidPassword("Ab1!")).toEqual(false);
});

test("should reject a password without an uppercase letter", () => {
  expect(isValidPassword("abc1!")).toEqual(false);
});

test("should reject a password without a lowercase letter", () => {
  expect(isValidPassword("ABC1!")).toEqual(false);
});

test("should reject a password without a digit", () => {
  expect(isValidPassword("Abcde!")).toEqual(false);
});

test("should reject a password without a required symbol", () => {
  expect(isValidPassword("Abc12")).toEqual(false);
});

test("should reject a password listed in previousPasswords", () => {
  // meets all other rules; fails only because it is in the list
  expect(isValidPassword("Abc1!", ["Abc1!"])).toEqual(false);
});
