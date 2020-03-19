function oddOrEven(array) {
   // .reduce() arr
   // if arr % 2 === 0, then return 'even'
   // else if arr % 2 !== 0 then return 'odd'
   // else if arr is empty, return 'even'

   const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

   if (sum % 2 === 0) {
     return 'even'
   } else if (sum % 2 !== 0) {
     return 'odd'
   } else {
     return 'even'
   }
}
