//Array() is the Array Constructor


const arr = new Array(10,20,30,40)
console.log(arr)

const arr1 = Array(10,20,30,40)
console.log(arr1)


const arr2 = new Array(5,3)
console.log(arr2)
console.log(arr2.length)


const arr3 = Array.of(5)
console.log(arr3)
const arr4 = Array.of(2,3,4,5)
console.log(arr4)
console.log(arr.length)


const str = "hello"
const arrstr = Array.from(str)
console.log(arrstr)



const original = [2,3,4,5,6]
const newarray = Array.from(original)
console.log(newarray)
console.log(original===newarray)


//Slice
//It can make a shallow copy
//doesn't mutate the original array
const or = [1,2,3,4,5]
const copy = or.slice()
console.log(copy)
console.log(or === copy)

//difference between slice and spread
//slice : take the element of this iterable and spread them here.
//  Extract a portion of an array 




