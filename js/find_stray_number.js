function stray(numbers) {
//   return 0;
  // loop through arr, and return num that !== current num

  let strayNum = numbers[0]

  if (strayNum !== numbers[1]) {
    if (numbers[1] === numbers[2]) {
      return strayNum
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== strayNum) {
      strayNum = numbers[i]
      return strayNum
    }
  }
}
