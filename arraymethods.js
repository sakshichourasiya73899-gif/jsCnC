// let arr=["Red","Yellow","Green"]
// arr[5]="Pink"
// // console.log(arr)
// // arr.forEach(function(num){
// //     console.log(num)
// // })

//Callback Function
function welcome(){
    console.log("Welcome to Javascript")
}
//main function
function greet(name,callback){
    console.log("Hello"+name);
    //Execute the callback function
    callback();
}
//calling greet and passing the callback function
greet("Sakshi",welcome);
