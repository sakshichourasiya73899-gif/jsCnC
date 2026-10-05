// 
function num(value){
   console.log(value)

}

function myforEach(arr,callback){
    for(let i=0;i<arr.length;i++){
        (callback(arr[i]))

    }
   

}
myforEach([1,2,3],num)
