function findShort(s){
  // split string into array
  const wordArr = s.split(' ')
  let smallestWord = wordArr[0]
  // loop through array
  for (let i = 0; i < wordArr.length; i++) {
  // if length of current word is less than previous word,
    if (wordArr[i].length < smallestWord.length) {
    // let smallestWord = current word
    smallestWord = wordArr[i]
    }
  }
  return smallestWord.length
}
