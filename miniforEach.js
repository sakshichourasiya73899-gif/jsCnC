function square(value){
    console.log(value*value)
}
function myforEach(arr,callback){
   for(let i=0;i<arr.length;i++){
      callback(arr[i])
   }

}

myforEach([2,3,4],square)