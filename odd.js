function isOdd(number) {
  if (number % 2 === 0) {
    return "False";
  } else {
    return "True";
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));