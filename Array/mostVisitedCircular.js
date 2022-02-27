/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
 var mostVisited = function(n, rounds) {
    
    var start= rounds[0];
    var end= rounds[rounds.length-1];
    
    let list= [];
    
    if(start<=end)
    {
        for(let i=start;i<=end;i++)
        {
            list.push(i);
        }
    }
    else
    {   

        for(let i=1;i<=end;i++)
        {
            list.push(i);
        }
        
        for(let i=start;i<=n;i++)
        {
            list.push(i);
        }

    }
    
    return list;
    
}

console.log(mostVisited(3,[1,2,3]))