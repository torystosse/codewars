function solution(number){
  // initialize counter

  let counter = 0

  // loop through nums that are below num passed in
  for (let i = 0; i < number; i++) {
    // if ((num % 3) && (num % 5) === 0) add num to counter
    if ((i % 3) && (i % 5) === 0) {
      counter = counter + i
    // if ((num % 3 === 0) || (num % 5 === 0)) add num to counter
    } else if ((i % 3 === 0) || (i % 5 === 0)) {
      counter = counter + i
    }
  }

  return counter
}
