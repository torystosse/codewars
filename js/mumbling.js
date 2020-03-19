function accum(s) {
  // transform string to lowercase
  // split string into array
  // iterate through arr... map?
  // duplicate each item of array times their index + 1 ... repeat each element?
  // capitalize first char in each index of array
  // add `-` between each string within array, join array back into string
  const arr = s.toLowerCase().split('').map((e, i) => e.toUpperCase() + (e.repeat(i))).join('-')
  return arr

}
