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

//using find method and findIndex and some and every
let arr = [2,4,6]
let found = arr.find((value)=>{
    return value>3
})
let foundindex = arr.findIndex(function(value){
    return value>3;
})
console.log(found,foundindex)
let foundSome = arr.some(value=>{
    return(value<0)
})
console.log(foundSome)
let foundevery = arr.some(value=>{
    return (value%2==0)
})
console.log(foundevery)




