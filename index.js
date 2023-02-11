// const add = (a, b) => a + b;

const add = (a, b) => {
  if (a === null || a === undefined || b === null || b === undefined) {
    throw new Error("Both arguments must be provided");
  }
  return a + b;
};

const toUpperReverse = (str) => str.toUpperCase().split("").reverse().join("");

module.exports = {
  add,
  toUpperReverse,
};
