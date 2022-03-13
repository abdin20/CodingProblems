package Heaps;

import java.util.*;

class Solution {
    public int[][] kClosest(int[][] points, int k) {
        class Point {
            public int x, y;
            public double dist;

            Point(int x, int y, double dist) {
                this.x = x;
                this.y = y;
                this.dist = dist;
            }
        }

        PriorityQueue<Point> minHeap = new PriorityQueue<Point>(points.length, new Comparator<Point>() {
            public int compare(Point a, Point b) {

                if (a.dist > b.dist) {
                    return 1;
                }
                if (a.dist < b.dist) {
                    return -1;
                }
                return 0;
            }
        });

        Point currPoint = new Point(0, 0, 0);
        for (int i = 0; i < points.length; i++) {
            double dist = Math.sqrt(Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2));
            currPoint = new Point(points[i][0], points[i][1], dist);

            minHeap.add(currPoint);
        }
        int[][] closest = new int[k][2];

        for (int m = 0; m < k; m++) {
            currPoint = minHeap.poll();
            closest[m][0] = currPoint.x;
            closest[m][1] = currPoint.y;
        }

        return closest;
    }

    public static void main(String args[]) {
        int[][] test = { { 0, 30 }, { 5, 10 }, { 15, 20 } };

        Solution test1 = new Solution();

        System.out.println(test1.kClosest(test, 2));

    }
}
