function add7(number) {
  return number + 7;
}

function multiply(num1, num2) {
  return num1*num2;
}

function capitalize(string) {
  // only first letter capitalized, no matter input
  let result = string.slice(0,1).toUpperCase() + string.slice(1,).toLowerCase()
  return result;
}

function lastLetter(string) {
  return string.slice(-1);
}
