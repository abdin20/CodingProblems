function solution(A, D) {
    
    
    //each object in array
    //{transactions,f}
    let monthlyFee=[]
    let endingBalance=0;
    for(let x=0;x<=12;x++){
        monthlyFee.push({cardTransactions:0,cardTotal:0})
    }
    // console.log(monthlyFee[12].cardTotal)
    for(let i=0;i<A.length;i++){
        //get the date for the transaction
        
        let transactionDate=D[i].split("-")
        //get the month of the transaction
        let transactionMonth=parseInt(transactionDate[1])
        // console.log(transactionMonth)
        console.log(monthlyFee[transactionMonth])
        if(A[i]<0){
            //increment transaction amount and total
            let newTransaction=monthlyFee[transactionMonth].cardTransactions+1
            let newTotal=monthlyFee[transactionMonth].cardTotal+A[i]
            monthlyFee[transactionMonth]={cardTransactions:newTransaction,cardTotal:newTotal}
        }
        endingBalance+=A[i];
    }

    for(let i=1;i<=12;i++){
        if(monthlyFee[i].cardTransactions<3 && monthlyFee[i].cardTotal<100){
            endingBalance-=5
        }
    }

    return endingBalance;
}

console.log(solution([100, 100, 100, -10], ['2020-12-31', '2020-12-22', '2020-12-03', '2020-12-29']))