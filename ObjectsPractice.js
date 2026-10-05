

const mysym = Symbol("key1")


const jsUser = {
    name:"Sakshi",
    "Full Name":"chourasiya",
    [mysym]:"mykey1",
    age:20,
    location:"Jaipur",
    email:"sakshi@gmail.com",
    isloggedIn:false,
    lastloginDays:["Monday","Saturday"]


}
jsUser.email = "sakshi.chatGPT.com"
Object.freeze(jsUser)
jsUser.name = "Hitesh"

console.log(jsUser.name)
console.log(jsUser["email"])      
console.log(jsUser["Full Name"])
console.log(jsUser[mysym])
//console.log(jsUser.Full Name)

//Object.create   this is the constructor method of creating an object 
