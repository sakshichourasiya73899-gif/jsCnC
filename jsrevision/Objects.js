


// const user = {
//     name: "Sakshi",
//     address: {
//         city: "Delhi"
//     }
// };

// const copy = {...user}
// user.name = "Shalini"
// copy.address = "mumbai"
// console.log(user)
// console.log(copy)

// const getuser = async (id)=>{
//    if(!id){
//     throw new Error("id not found...!");
//    }

//    return{
//     id:id,
//     name:"sakshi"
//    }
// }
// const main = async ()=>{
//     try{
//         const user = getuser()
//         console.log(`${user} found....!!!`)
//     }
//     catch(error){
//         console.log(error.message);
        
//     }
   
// }

// main();
// const user = {
//     name: "Sakshi",
//     age: 21
// };

// const key = "name";

// console.log(user.key);
// console.log(user[key]);



// //Object Method + this
// const users = {
//     name: "Sakshi",
//     greet() {
//         console.log(this.name);
//     }
// };

// const fn = user.greet;

// user.greet(); // this → user → "Sakshi"
// fn();         // this → undefined (strict mode)

// Rule: const fn = user.greet copies the function reference, not its this. this is decided by how the function is called.

// user.greet()  → this = user
// copy.greet()  → this = copy
// fn()          → this = undefined

// And with shallow copy:

// const copy = { ...user };

// user.greet === copy.greet; // true → same function reference

// But user.greet() and copy.greet() still have different this.



//Level 2 - Object Utilites
//Object.Keys()

// const ObjUser = {
//      name:"Sakshi",
//      age:21,
//      role:"developer"
// }
// const result = Object.keys(ObjUser)
// console.log(Array.isArray(result))
// console.log(Object.keys(ObjUser))
// console.log(Object.keys(ObjUser).length)
// Object.keys(ObjUser).forEach(key=>{
//     console.log(key)
// })

// const user = {
//     name:"Sakshi",
//     age:21,
//     role:"developer"
// }

// console.log(Object.values(user))
//  const user = {
//     name: "Sakshi",
//     age: 21,
//     role: "developer"
// };
// Object.entries(user).forEach(([key , value])=>{
//     console.log(key,value);
// })
// const user ={
//     name:"Sakshi",
//     age:21,
//     role:"developer"
// }
// console.log(Object.entries(user))

//Object.assign()
// const user = {
//     name:"sakshi",
//     age:21
// }

// const copy = Object.assign({},user)
// console.log(copy)
// console.log(user === copy)

//Merging
// const user = {
//     name: "Sakshi"
// };

// const details = {
//     age: 21,
//     role: "developer"
// };

// const result = Object.assign({},user,details)
// console.log(result)
// Object.groupBy()
// const students = [
//     { name: "A", marks: 80 },
//     { name: "B", marks: 40 },
//     { name: "C", marks: 90 },
//     { name: "D", marks: 35 }
// ];
// const result = Object.groupBy(students,student=>{
//     return student.marks>=50?"passed":"failed";
// })
// console.log(result)

// const user = {};
// Object.defineProperty(user,"id",{
//     value:101,
//     writable:false
// })

// user.id = 999;
// console.log(user.id)


// Object.defineProperty()

const user = {
    name:"sakshi",
    age:"21"
}
Object.defineProperty(user,"id",{
    value : 101,
    enumerable:false,
    writable : false,
    configurable : false
})
delete user.name;
console.log(Object.keys(user))
console.log(user.name)
// user.name = "shalini"
// console.log(user.name)
console.log(user)
