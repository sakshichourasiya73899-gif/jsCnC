let calculate = (a,b)=>{
    try{
        if(a>b){
            return a/b;
        }
    }
    catch{
        console.log("invalid Input");
    }
}

console.log(calculate(2,5))
