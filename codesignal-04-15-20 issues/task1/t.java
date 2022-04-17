public class MyClass {
    public static String solution(String arr[], int apprCount)
    {
        String res = "";
        int length = 1;
 		for (int wIndex = 0; wIndex < arr.length; wIndex ++) {
 			String word = arr[wIndex];;
 			for (int start = 0; start < word.length(); start++) {
 				for (int end = start + length; end <= word.length(); end++) {
					String current = word.substring(start, end);
	                int count = 0;
	                for (int i = 0; i < arr.length; i++) {
	                    if (arr[i].contains(current)) {
	                        count ++;
	                    }
	                    if (count >= apprCount)
	                        break;
	                }
	                if (count >= apprCount) {
	                	if (res.length() < current.length()) {
	                		res = current;
	                	}
	                	if (res.length() == current.length() && res.compareTo(current) > 0) {
	                		res = current;	
	                	}
	                	length = res.length();
	 				}
 				}
 			}
 		}
        return res;
    }
    
    public static void main(String args[]) {
      String[] words = {"dragon", "rage", "age", "savage"};
      System.out.println(solution(words, 2));
    }
}