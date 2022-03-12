import java.util.*;

class Solution {

    public int problemName(int[][] intervals) {

      return 1;
    }

    public static void main(String args[]){

        //making 2d Array with literals;
        int[][] test=  {{0,30}, {5,10},{15,20}};

        Solution test1= new Solution();
        System.out.println(test1.problemName(test));

        //making hashmap
        HashMap<String, String> capitalCities = new HashMap<String, String>();

        capitalCities.put("1", "2");
        capitalCities.get("1");
        capitalCities.remove("1");
        capitalCities.containsKey("1");
        
        int heapLength=3;
        PriorityQueue<Integer> minheap=new PriorityQueue<Integer>(heapLength,new Comparator<Integer>(){
            public int compare(Integer a,Integer b){
                return a-b;
            }
        } );
    
        minheap.add(1);
    }
}