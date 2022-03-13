package Heaps;
import java.util.*;
class  Solution {
    public int connectSticks(int[] sticks) {
        
        if(sticks.length==1) return 0;
        
        PriorityQueue<Integer> minHeap= new PriorityQueue<Integer>(sticks.length,new Comparator<Integer>(){
            public int compare(Integer a, Integer b){
                return a-b;
            }
        });
        
        for(int i=0; i<sticks.length;i++){
            minHeap.add(sticks[i]);
        }
       
  
        int a,b;
        int totalCost=0; 
        
        while(minHeap.size()>1){
            a=minHeap.poll();
            b=minHeap.poll();
            // System.out.println("A: "+ a +"B: "+ b);
            totalCost+=a+b;
            minHeap.add(a+b);
            // System.out.println(minHeap);     
        }
        return totalCost;
    }

    public static void main(String args[]){
        int[] sticks={1,2,3,4};
        Solution test=new Solution();
        System.out.println(test.connectSticks(sticks));
    }
}