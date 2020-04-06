function digits(n) {
  let count = 0
  const str = n.toString()
  for (let i = 0; i < str.length; i++) {
    count++
  }
  return count
}
