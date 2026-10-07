// //Array() is the Array Constructor




// const arr = new Array(10,20,30,40)
// console.log(arr)

// const arr1 = Array(10,20,30,40)
// console.log(arr1)


// const arr2 = new Array(5,3)
// console.log(arr2)
// console.log(arr2.length)


// const arr3 = Array.of(5)
// console.log(arr3)
// const arr4 = Array.of(2,3,4,5)
// console.log(arr4)
// console.log(arr.length)


// const str = "hello"
// const arrstr = Array.from(str)
// console.log(arrstr)



// const original = [2,3,4,5,6]
// const newarray = Array.from(original)
// console.log(newarray)
// console.log(original===newarray)


// //Slice
// //It can make a shallow copy
// //doesn't mutate the original array
// const or = [1,2,3,4,5]
// const copy = or.slice()
// console.log(copy)
// console.log(or === copy)

//difference between slice and spread
//slice : take the element of this iterable and spread them here.
//  Extract a portion of an array 


// Array Fundamentals 
// let fruits = ["apple", "banana", "mango", "orange"];

// console.log(fruits[0])
// console.log(fruits[fruits.length-1])

// let addfruits = fruits.splice(1,0,"grapes")
// console.log(addfruits)
// console.log(fruits.push("kiwi"))
// console.log(fruits)
// console.log(fruits.shift())
// console.log(fruits)



// // 3. Empty slots



// // let arr = [1, 2, 3];

// // arr[5] = 10;

// // console.log(arr);
// // console.log(arr.length);

// // Explain what happened to indexes 3 and 4.


// let arr = [10, 20, 30];

// let a = arr.push(40);
// let b = arr.pop();
// let c = arr.shift();
// let d = arr.unshift(100);

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(arr);
//Slice

// let arrarySlice = [10,20,30,40]
// console.log(arrarySlice.slice(1,4))
// console.log(arrarySlice)


//Negative Indexes
// let arr = [10, 20, 30, 40, 50];

// console.log(arr.slice(-3));
// console.log(arr.slice(1, -1));
// console.log(arr.slice(-4, -2));

// let arr = [10,20,30,40,50]
// let newArray = arr.slice(1,4)
// console.log(newArray)




//Level 4- splice

// let array = [10,20,30,40,50];
// let result = array.splice(2,2)
// console.log(result)
// let array = [10,20,50]
// array.splice(2,0,30,40)
// console.log(array)

// let strarr = ["HTML","CSS","JavaScript","Java"]
// console.log(strarr.splice(2,2,"python","React"))
// console.log(strarr)

//spread operator
// let original = [1,2,3]
// let copy = [...original]
// copy.push(4)
// console.log(original)
// console.log(copy)

// let a =[1,2,3]
// let b = a;
// b.push(4)
// console.log(a)
// console.log(b)

// let frontend = ["HTML", "CSS", "JS"];
// let backend = ["Node", "Express", "MongoDB",...frontend];
// console.log(backend)
// let result = [...frontend,...backend]
// console.log(result)


// let arr = [10,20,30]
// arr.includes(20)
// arr.includes(50)
// Checks if it includes

// let roles = ["admin", "user", "editor"];
// console.log(roles.includes("admin"))


// let skills = ["HTML", "CSS", "JavaScript"];
// let index = skills.indexOf("CSS")
// console.log(index)

// let numbers = [10, 25, 30, 45];
// //expricite funtions so we need to return 
// let result = numbers.find(function(nums){
//      return nums>20
// })
// console.log(result)

// let users = [
//     { name: "A", age: 17 },
//     { name: "B", age: 22 },
//     { name: "C", age: 25 }
// ];

// let user = users.find((user,index,array)=>{
//     console.log(user,index,array)
//     return user;
// })
// console.log(user)


//filter()


// let products = [
//     { name: "Laptop", price: 800 },
//     { name: "Phone", price: 500 },
//     { name: "Mouse", price: 20 }
// ];

// let expensive = products.filter((product)=>{
//    return product.price>100;
// })
// console.log(expensive)

// let users = [
//     { name: "Sakshi", age: 20 },
//     { name: "Rahul", age: 22 }
// ];
// let names = users.map(user=>(user.name))
// console.log(names)


//accumulator can produce objects as well 

let numbers = [1,2,3,4]
let result  = numbers.reduce((acc,num)=>{
    acc.sum+=num;
    acc.count++;
   return acc;
},
{
    sum:0,
    count:0
})


// learn more on these topics later

// Reorder
// sort()
// reverse()
// 9. Convert / Format
// join()
// flat()
// flatMap()
// 10. Array utilities
// Array.isArray()
// Array.from()
// Array.of()
// fill()
// keys()
// values()
// entries()









