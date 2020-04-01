public class Solution {

  public int solution(int number) {
    int acc = 0;

    for(int i = 1; i < number; i++) {
      if (i % 5 == 0 || i % 3 == 0) {
        acc += i;
      }
    }
    return acc;
  }
}
