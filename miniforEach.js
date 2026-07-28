// function show(value,index,arr){
//     console.log(value,index,arr)
// }
// function myforEach(arr,callback){
//    for(let i=0;i<arr.length;i++){
//        let index = i;
//       callback(arr[i],index,arr)
//    }

// }

// myforEach([2,3,4],show)
//let arr = [10,20,30]
// arr.forEach((dog,cat,rat)=>{
//    console.log(dog)
//    console.log(cat)
//    console.log(rat)

// })


function show(value,index,array){
    console.log(value,index,array)
    
}
function myMap(arr,callback){
    let result = [];
    for(let i=0;i<arr.length;i++){
        const returnValue = callback(arr[i],i,arr)
        result.push(returnValue);

    }
    return result;

}
myMap([1,2,3],show)