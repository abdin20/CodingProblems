package Array;

import java.util.*;

class Solution {
    public boolean isValid(String s) {
        HashMap<Character, Character> bracketMap = new HashMap<Character, Character>();

        // mappings for closing and openign brackets
        bracketMap.put(')', '(');
        bracketMap.put('}', '{');
        bracketMap.put(']', '[');

        Stack<Character> stack = new Stack<Character>();

        // loop through string;
        for (int i = 0; i < s.length(); i++) {

            // check if its closing braket
            if (bracketMap.containsKey(s.charAt(i))) {

                // check if closing bracket matches with top of stack
                if (stack.size() > 0 && stack.peek() == bracketMap.get(s.charAt(i))) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                char c = s.charAt(i);
                stack.push(c);
            }

        }

        return stack.empty();
    }
}