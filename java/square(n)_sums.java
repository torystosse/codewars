import java.util.Arrays;

public class Kata
 {
  public static int squareSum(int[] n)
  {
   int[] squaredArr = n;
   int sum = 0;

  // loop through array
   for (int i = 0; i < squaredArr.length; i++) {
      // multiple i * i
     squaredArr[i] = squaredArr[i] * squaredArr[i];
      // sum all nums
     sum+=squaredArr[i];
   }
   // return sum
   return sum;
  }
 }
 
