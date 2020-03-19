function filter_list(l) {
  // Return a new array with the strings filtered out
  // filter through array, return new array where type of element === a number
  return l.filter(e => typeof e === 'number')
}
