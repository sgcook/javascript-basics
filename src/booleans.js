function negate(a) {
  // your code here
  return a === false;
};

function both(a, b) {
  // your code here
   return (a && b) ? true : false;
};

function either(a, b) {
  // your code here
  return (a || b) ? true : false;
};

function none(a, b) {
  // your code here
  return (a === false && b === false) ? true : false;
};

function one(a, b) {
  // your code here
  return ((a || b) && !(a && b)) ? true : false;
};

function truthiness(a) {
  // your code here
  return Boolean(a);
};

function isEqual(a, b) {
  // your code here
  return (a === b) ? true : false;
};

function isGreaterThan(a, b) {
  // your code here
  return (a > b) ? true : false;
};

function isLessThanOrEqualTo(a, b) {
  // your code here
  return (a <= b) ? true : false;
};

function isOdd(a) {
  // your code here
  return (a % 2 !== 0) ? true : false;
};

function isEven(a) {
  // your code here
  return (a % 2 === 0) ? true : false; 
};

function isSquare(a) {
  // your code here
  return Number.isInteger(Math.sqrt(a)) ? true : false;
};

function startsWith(char, string) {
  // your code here
  return (char === string.slice(0, 1)) ? true : false;
};

function containsVowels(string) {
  // your code here
  return string.match(/[aeiou]/gi) ? true : false;
};

function isLowerCase(string) {
  // your code here
  return string.match(/[A-Z]/g) ? false : true;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
