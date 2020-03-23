import java.util.Arrays;

public class Kata {
    public static int findShort(String s) {
      // split string into array
      String[] arr = s.split(" ");
      // set the smallest word to be the first word in array
      String smallestWord = arr[0];

      for (int i = 0; i < arr.length; i++) {
        // if the length of the current word is less than smallestWord
        if (arr[i].length() < smallestWord.length()) {
          // let smallestWord = current word
          smallestWord = arr[i];
        }
      }
      // return length of smallestWord
      return smallestWord.length();
    }
}
