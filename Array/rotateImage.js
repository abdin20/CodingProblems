/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * rotates matrix 90 degrees to the right
 */
var rotate = function(matrix) {

            var n = matrix.length;
            console.log(n)
            
            //transpose is row and column switch
            transpose = function(matrix) {
                let n = matrix.length;
                for (let i = 0; i < n; i++) {
                    for (let j = i; j < n; j++) {
                        var tmp = matrix[j][i];
                        matrix[j][i] = matrix[i][j];
                        matrix[i][j] = tmp;
                    }
                }

            }
            
        
            reflect=function(matrix){
                let n=matrix.length;
                console.log(matrix)
                for (let i = 0; i < n; i++) {
                    for (let j = 0; j < Math.floor(n/2); j++) {
                        var tmp = matrix[i][n-1-j];
                        matrix[i][n-1-j]=matrix[i][j]
                        matrix[i][j] = tmp;
                    }
                }
                return matrix
            }
            transpose(matrix)
            reflect(matrix)
            return matrix
      
};

(rotate(matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))