const { add, toUpperReverse } = require("./index.js");

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("adds two negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it("adds a negative and a positive number", () => {
    expect(add(-2, 3)).toBe(1);
  });

  it("throws an error when the first argument is null", () => {
    expect(() => add(null, 3)).toThrow("Both arguments must be provided");
  });

  it("throws an error when the second argument is undefined", () => {
    expect(() => add(2, undefined)).toThrow("Both arguments must be provided");
  });

  it("throws an error when both arguments are null", () => {
    expect(() => add(null, null)).toThrow("Both arguments must be provided");
  });
});

describe("toUpperReverse", () => {
  it("reverses and uppercases a string", () => {
    expect(toUpperReverse("hello")).toBe("OLLEH");
  });

  it("handles an empty string", () => {
    expect(toUpperReverse("")).toBe("");
  });

  it("handles a string with numbers and special characters", () => {
    expect(toUpperReverse("h3llo!")).toBe("!OLL3H");
  });

  it("throws an error when the argument is null", () => {
    expect(() => toUpperReverse(null)).toThrow("Something went wrong!");
  });

  it("throws an error when the argument is undefined", () => {
    expect(() => toUpperReverse(undefined)).toThrow("Something went wrong!");
  });
});
