function feast(beast, dish) {
  let first = dish.slice(0, 1);
  let last = dish.slice(-1);
  if (beast.endsWith(last) && beast.startsWith(first)) {
    return true;
  } else {
    return false;
  }
}

console.log(feast("brown bear", "bear claw"));
