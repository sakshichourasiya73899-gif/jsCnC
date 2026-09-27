let calculate = (a,b)=>{
    try{

      if(b=0){
        throw new Error("can't divide by 0");
      }

        if(a<b){
           throw new Error("Invalid b should be greater than a");

        }
    }
    catch(error){
        console.log(error.message);
    }
    return a/b;
}

console.log(calculate(0,2))
console.log(2,1);
console.log(2,0);
