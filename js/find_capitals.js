var capitals = function (word) {
  // initialize empty array
  let arr = []
  // split word into array
  const wordArr = word.split('')
  // iterate through array
  for (let i = 0; i < wordArr.length; i++) {
    // if current letter of array is the same as the capital of current letter
    // i.e. checking if letter is capitalized
    if (wordArr[i] === wordArr[i].toUpperCase()) {
    // push the index of the letter new empty array
      arr.push(i)
    }
  }

  return arr
};
