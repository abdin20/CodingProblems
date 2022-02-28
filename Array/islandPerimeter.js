/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    var perimeter=0;

    for(let x=0;x<grid.length;x++){
         
        for(let y=0;y<grid[x].length;y++){
          
            //check if land
            if(grid[x][y]===1){
                
            //check if at edge of grid, if so add to perimeter
            if(!grid[x-1]) perimeter+=1;
            if(!grid[x+1]) perimeter+=1;
            if(!grid[x][y-1]) perimeter+=1;
            if(!grid[x][y+1]) perimeter+=1;
            
                //check for water, if water on edge add to perimeter
            if(grid[x-1] && grid[x-1][y]===0){
                perimeter+=1;
               }
            
            if(grid[x+1] && grid[x+1][y]===0){
                perimeter+=1;
               }
            if(grid[x][y+1] && grid[x][y+1]===0){
                perimeter+=1;
               }
            if(grid[x][y-1] && grid[x][y-1]===0){
                perimeter+=1;
              }
        } 
        }
    }
    
    return perimeter
};