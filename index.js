// const add = (a, b) => a + b;
const add = (a, b) => {
  if (a === null || a === undefined || b === null || b === undefined) {
    throw new Error("Both arguments must be provided");
  }
  return a + b;
};

const toUpperReverse = (str) => {
  try {
    return str.toUpperCase().split("").reverse().join("");
  } catch (err) {
    throw new Error("Something went wrong!");
  }
};
module.exports = {
  add,
  toUpperReverse,
};
