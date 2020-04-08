function descendingOrder(n){
  const arr = Array.from(String(n), Number).sort(function(a, b) {
  return b - a;
}).join('')

  return parseInt(arr)

}
