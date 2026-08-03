// let fruits = ["apple", "banana", "mango"];
// console.log(fruits)
// console.log(fruits.slice(0,2))
// console.log(fruits)
// console.log(fruits.join("-"))
// console.log(fruits)
// console.log(fruits.concat(["grapes","kiwi"]))
// console.log(fruits)
let marks = [35, 48, 92, 81, 27];
// let PassedStudents = []
// marks.forEach((marks,index)=>{
     
//     if(marks>=40){
//         PassedStudents.push(marks)
     
//     }
    
// })
// console.log(PassedStudents)

let passed = marks.filter((mark,index)=>{
    return (mark>=40)
   
 }
    
)
 console.log(passed)