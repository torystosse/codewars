function disemvowel(str) {
  // 1. separate each character in string & turn into array

  const splitString = str.split('')

  // 2. use .filter() to filter and create new array with values that do not
  // equal 'a', 'e', 'i', 'o', 'u'
  // 3. turn array back into string?

  const result = splitString.filter(
    char =>
       !(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U'))
      .join('')
  return result;
}
