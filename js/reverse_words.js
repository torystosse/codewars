function reverseWords(str) {
  // split string
  // loop through arr and push the last element to new arr
  // while looping through, split str of words, reverse, and join
  // join arr
  let newArr = []
  let arr = str.split(' ')
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split('').reverse().join(''))
  }
  return newArr.join(' ')
}
