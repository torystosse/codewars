import java.util.Arrays;

class Solution {
  static int stray(int[] numbers) {
    // set strayNum to first item in arr
    int strayNum = numbers[0];

    // edge case
    // if first two nums in arr are different
    if (strayNum != numbers[1]) {
    // and if second num equals third num
      if (numbers[1] == numbers[2]) {
        // return first num in arr
        return strayNum;
      }
    }

    // loop through arr
    for (int i = 0; i < numbers.length; i++) {
      // current num in arr is not equal to strayNum
      if (numbers[i] != strayNum) {
        // strayNum is now current num
        strayNum = numbers[i];
      return strayNum;
    }
  }

    return strayNum;
  }
}
