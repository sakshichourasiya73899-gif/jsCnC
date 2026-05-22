//JavaScript is a dynamically typed language.This means you do not need to declare the 
// type of a variable (like int or string) when you create it. Instead, the JavaScript engine assigns a type to the variable at runtime based on its current value


//primitive
const score = 100;
console.log(typeof(score))

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id)
console.log(anotherId)
console.log(id === anotherId)

//it's divided into datatypes based on how they are stored in memory 
//these are callback values when it's value is asked then they get copied and then they are passed or used  not the reference of the values
//primitive data types are stored in stack memory and they are immutable
//primitive data types are: string, number, boolean, null, undefined, symbol, bigint


//reference type and non-primitive data types

//when we assign a non-primitive data type to a variable then it is stored in heap memory and the reference of that value is stored in stack memory and when we ask for the value of that variable then it gives us the reference of that value and not the value itself
//non-primitive data types are stored in heap memory and they are mutable
//non-primitive data types are: object, array, function

//master browser events  and js objects if u want to master js 
//Array Objects and Functions 

const hero = ["Superman", "Batman", "Wonder Woman"];
let myHero = {
    name :"Superman",
    age: 30,
}

const myFunction = function(){
    console.log("Hello World")
}
const temp = null;
console.log(typeof null)
console.log(typeof myFunction)