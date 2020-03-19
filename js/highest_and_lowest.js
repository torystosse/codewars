function highAndLow(numbers){
  // split string of nums into array
  // iterate through nums, if current num is less than previous num, let smallestNum = current num
  // iterate through nums, if current num is greater than previous num, let greatestNum = current num
  // push largest num to new arr
  // push smallest num to new arr
  // join arr back to string
  let newArr = []

  const numArr = numbers.split(' ')

  const smallestNum = Math.min(...numArr)
  const greatestNum = Math.max(...numArr)

  newArr.push(greatestNum, ' ', smallestNum)

  return newArr.join('')

}
