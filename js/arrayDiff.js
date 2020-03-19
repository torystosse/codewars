function arrayDiff(a, b) {
  // filter through a, return new array that does not include element in b
  return a.filter(element => !b.includes(element))
}
