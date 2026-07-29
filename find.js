function show(value,index,arr){
  return(value>10)
}


function myfind(arr,callback){
        
    for(let i=0;i<arr.length;i++){
        let found=callback(arr[i],i,arr);
        if(found){
            return arr[i]
            
        }

    }
    return undefined;

}
let result = myfind([1,2,10,12,16,19],show)
console.log(result);

//using find method
let arr = [2,3,4,5,6]
let found = arr.find((value)=>{
    return value>3
})
let foundindex = arr.findIndex(function(value){
    return value>3;
})
console.log(found,foundindex)

//findindex
