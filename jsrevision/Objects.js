


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

const ObjUser = {
     name:"Sakshi",
     age:21,
     role:"developer"
}
const result = Object.keys(ObjUser)
console.log(Array.isArray(result))
console.log(Object.keys(ObjUser))
console.log(Object.keys(ObjUser).length)
Object.keys(ObjUser).forEach(key=>{
    console.log(key)
})


