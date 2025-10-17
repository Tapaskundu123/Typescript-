export {};

const AverageArr= (arr:[a:number,b:number, c:number, d:number]):number=>{

   let avg= 0;
    for(let i= 0; i<arr.length; i++){
       avg= avg+ arr[i]
    }

    avg= avg / arr.length ;
    return avg;

}

console.log(AverageArr([2,4,5,6]));