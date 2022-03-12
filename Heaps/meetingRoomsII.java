import java.util.*;

class Solution {
    public int minMeetingRooms(int[][] intervals) {
        
        //sort the array of intervals based on start time;
        Arrays.sort(intervals, new Comparator<int[]>(){
            public int compare(int[]a, int[]b){
                return a[0] - b[0];
            }
        });
        
        
        //min heap
        PriorityQueue<Integer> allocator = new PriorityQueue<Integer>(intervals.length,new Comparator<Integer>(){
            public int compare(Integer a, Integer b){
                return a-b;
            }
        });
        
        //add first room to heap
        allocator.add(intervals[0][1]);
        
        for(int i=1;i<intervals.length;i++){
            
            //so this will find the meeting ending the soonest 
            //if its less than current start time we remove it from list 
            //later we add a room so the total number of rooms doesnt change!
            if(allocator.peek()<=intervals[i][0]){
                //removes top of heap
                allocator.poll();
            }
            
            //add end time for current meeting;
            allocator.add(intervals[i][1]);
        }
        
        return allocator.size();
    }

    public static void main(String args[]){
        int[][] test=  {{0,30}, {5,10},{15,20}};

        Solution test1= new Solution();

        System.out.println(test1.minMeetingRooms(test));

    }
}