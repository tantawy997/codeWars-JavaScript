function squareDigits(num) {
  let digits = num
    .toString()
    .split("")
    .map((iNum) => parseInt(iNum, 10));

  let powered = digits.map((Element) => Math.pow(Element, 2));
  return parseInt(powered.join(""), 10);
}
