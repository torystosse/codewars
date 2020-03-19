function validate(password) {
  // check for A-Z
  // check for a-z
  // check for 0-9
  // check for at least 6 characters of the above
  const pwCheck = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/


  return pwCheck.test(password);
}
