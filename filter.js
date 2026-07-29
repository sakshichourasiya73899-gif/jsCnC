function show(value,index,array){
    return(value%2==0)

}

function myfilter(arr,callback){
    let result = [];
   for(let i=0;i<arr.length;i++){
     let shouldkeep=callback(arr[i],i,arr)
      if(shouldkeep){
        result.push(arr[i])
    }
   }
   
    return result;
}

let ans = myfilter([2,4,6,9,3],show)
console.log(ans)