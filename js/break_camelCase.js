function solution(string) {
  // split string
    const arr = string.split('')
    // iterate through arr
    for (let i = 0; i < arr.length; i++) {
    // if current letter equals current letter as uppercase
    // aka if current letter is uppercase
      if (arr[i] === arr[i].toUpperCase()) {
      // add a space before current letter
        arr.splice(i, 0, ' ')
        // increase place in arr
        // without this, we will have an infinite loop,
        // as it will always encounter that one capitalized letter
        i += 2
      }
    }
    // return the array joined back into string
  return arr.join('')
}
