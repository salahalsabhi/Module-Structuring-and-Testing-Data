import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", () =>
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm"));

test("can correctly convert morning time", () =>
  assert.equal(formatAs12HourClock("08:00"), "8:00 am"));

test("can correctly convert midnight", () =>
  assert.equal(formatAs12HourClock("00:00"), "12:00 am"));

test("noon is pm", () =>
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm"));

test("noon with minutes", () =>
  assert.equal(formatAs12HourClock("12:45"), "12:45 pm"));

test("afternoon keeps minutes", () =>
  assert.equal(formatAs12HourClock("13:30"), "1:30 pm"));

test("evening keeps minutes", () =>
  assert.equal(formatAs12HourClock("23:15"), "11:15 pm"));

test("midnight with minutes", () =>
  assert.equal(formatAs12HourClock("00:30"), "12:30 am"));

test("just before noon", () =>
  assert.equal(formatAs12HourClock("11:59"), "11:59 am"));
