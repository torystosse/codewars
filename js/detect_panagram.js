function isPangram(string){
  // transform toLowerCase
  // if string includes a-z return true
  // else return false

  const letters = 'abcdefghijklmnopqrstuvwxyz'

  const str = string.toLowerCase()

    for (let i = 0; i < letters.length; i++) {
      if (str.indexOf(letters[i]) === -1) {
        return false
      }
    }
    return true
}
