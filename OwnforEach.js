//How does the forEach works?
//it goes through every single elements in an array



function num(arr){
    let array;
   for(let i=0;i<arr.length;i++){
     array = arr[i]
   }
   return array;
  
      
   
  
}
function myforEach(arr,callback)
{
   
    console.log( callback(arr))

}
myforEach([10,15,20],num);