import java.util.Arrays;

public class Codewars {
  public static String oddOrEven (int[] array) {

    // sum of all numbers in array, using built in stream method
    int sum = Arrays.stream(array).sum();

    // tests for even first
    if (sum % 2 == 0) {
       return "even";
     }
     // if doesn't pass above test, num is odd
     return "odd";
  }
}
