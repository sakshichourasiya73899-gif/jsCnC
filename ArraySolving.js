// let fruits = ["apple", "banana", "mango"];
// console.log(fruits)
// console.log(fruits.slice(0,2))
// console.log(fruits)
// console.log(fruits.join("-"))
// console.log(fruits)
// console.log(fruits.concat(["grapes","kiwi"]))
// console.log(fruits)
//Question : 4
let marks = [35, 48, 92, 81, 27];
// let PassedStudents = []
// marks.forEach((marks,index)=>{
     
//     if(marks>=40){
//         PassedStudents.push(marks)
     
//     }
    
// })
// console.log(PassedStudents)

let passed = marks.map((mark,index)=>{
    return (mark>=40)
   
 }
    
)
 console.log(passed)
//Question : 5
let numbers = [1, 2, 3, 4, 5];
let multiple = numbers.reduce((accumulator,currentvalue)=>{
      accumulator.push(currentvalue*currentvalue)
      return accumulator

},[])
console.log(multiple)

let squares = numbers.map(nums=>nums*nums);
console.log(squares)
//Question : 6
let arr = [5,10,15]
let sum = arr.reduce((acc,curr)=>{
    return acc+curr;
})
console.log(sum);
//Question : 7
let ages = [22,19,25,18]
let isAdult = ages.every(age=>age>=18)
console.log(isAdult)
//Question : 8
//Check whether at least one student scored above 40
let nums = [15,32,45,10]
let isPassed = nums.some(score=>score>40)
console.log(isPassed)
//Question : 9
let num = [5,10,15,10]
let firstOccurence = num.findLastIndex(num=>num==10)
    console.log(firstOccurence)
//Question: 10
let num2 = [5,10,15,10]
let firstOccurence2 = num2.find(num=>num==10)
console.log(firstOccurence2)

// Learn what it does.
// Understand why it works that way.
// Write it from memory without looking at notes.
// Solve 8–15 small problems using only that method.

// That fourth step is where confidence comes from.