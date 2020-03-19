function minMax(arr){
  let newArr = []
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  newArr.push(min, max)
  return newArr
}
