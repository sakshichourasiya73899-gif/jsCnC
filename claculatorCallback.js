
function add(a,b){
  return(a+b);
}
function calculate(a,b,callback){
   
   console.log(callback(a,b))
  }

calculate(10,5,add)