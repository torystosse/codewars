public class PangramChecker {
  public boolean check(String sentence){
    // store alphabet
    String letters = "abcdefghijklmnopqrstuvwxyz";
    // convert to lowercase
    String lowercase = sentence.toLowerCase();

    for (int i = 0; i < letters.length(); i++) {
    // if index of alphabet, where char at current char doesn't exist in sentence
      if (lowercase.indexOf(letters.charAt(i)) == -1) {
      // returns false
        return false;
      }
    }
    // else, returns true
    return true;
  }
}
