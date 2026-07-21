
// @ts-check
//singleton
//when created using literals then It doesn't become singleton
//object literals
const mysym = Symbol("key1")//use the symbol as the value in the object

const user = {
    name:"Sakshi",
    "Surname":"Chourasiya",
    "full name": "Sakshi Chourasiya",
     [mysym] : "mykey1",
    age:20,
    location:"Bhilai",
    email:"sakshi@gmail.com",
    isloggedin:false
}
console.log(user.email)//why we need dot here?
console.log(user["email"])//why we don't need dot here
console.log(user.Surname)
//console.log(user.full name) this doesn't work,why?
console.log(user["full name"])
console.log(user[mysym])
console.log(typeof(user[mysym]))

//let freezesym = Object.freeze(user)
user.email="sidd@gmail.com"
//console.log(user)
user.greeting=function(){
    console.log("Hello user")
}
console.log(user.greeting())
console.log(user.greeting)
//here what is the difference beteween gretitng and the greeting
user.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(user.greeting2())