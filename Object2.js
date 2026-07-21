const tinderUser = new Object()//singleton object
console.log(tinderUser);
const tinderuser2 = {}//notsingleton object or object literals
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggenIn = false
console.log(tinderUser)
const regularUser={
    email:"some@gmail.com",
    fullname:{
       userfullname:{
         firstName:"Sakshi",
         lastName:"Chourasiya"
       }  
    }
}
console.log(regularUser.fullname?.userfullname?.firstName)

const obj1 ={
    1:"a",
    2:"b",
    3:"c"
}
const obj2 ={
    4:"d",
    5:"e",
    6:"f"
}
const obj3 = { obj1, obj2}
console.log(obj3)
const obj4 = Object.assign(obj1,obj2)
console.log(obj4)
const obj5 = Object.assign({},obj1,obj2)
console.log(obj5)
const obj6 = { ...obj1, ...obj2, ...obj3}
console.log(obj6)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('name'))