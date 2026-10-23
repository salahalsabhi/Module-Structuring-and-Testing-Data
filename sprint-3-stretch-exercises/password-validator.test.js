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

test("password has at least 5 characters and meets all rules", () => {
  const password = "Abc1!";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

test("rejects password shorter than 5 characters", () => {
  expect(isValidPassword("Ab1!")).toEqual(false);
});

test("rejects password without uppercase", () => {
  expect(isValidPassword("abc1!")).toEqual(false);
});

test("rejects password without lowercase", () => {
  expect(isValidPassword("ABC1!")).toEqual(false);
});

test("rejects password without number", () => {
  expect(isValidPassword("Abcde!")).toEqual(false);
});

test("rejects password without symbol", () => {
  expect(isValidPassword("Abc12")).toEqual(false);
});

test("rejects previous password", () => {
  expect(isValidPassword("password")).toEqual(false);
});
