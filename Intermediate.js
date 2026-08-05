// let users = [
//     {name:"Alice", age:20},
//     {name:"Bob", age:17},
//     {name:"Charlie", age:25}
// ];
// //Get the names of adults only "If I want the Array then use map"
// let getAdult = users.filter(user=>user.age>=18).map(user=>user.name)
// console.log(getAdult)

const users = [
    {
        id: 1,
        name: "Alice",
        age: 45,
        city: "Delhi",
        isActive: true,
        role: "User"
    },
    {
        id: 2,
        name: "Bob",
        age: 17,
        city: "Mumbai",
        isActive: false,
        role: "Admin"
    },
    {
        id: 3,
        name: "Charlie",
        age: 25,
        city: "Pune",
        isActive: true,
        role: "User"
    }
];


let ActiveUsers = users.filter(user=>user.isActive==true).sort((a,b)=>a.age-b.age).map(user=>{return user.name
    console.log(user.name)
}
)
console.log(ActiveUsers)

let passwords = [
    "hello123",
    "admin",
    "OpenAI@2025",
    "abcd"
];

let findPassword = passwords.some(pass=>pass.includes("@"))
console.log(findPassword)

let products = [
    { name: "Laptop", price: 60000, inStock: true },
    { name: "Phone", price: 30000, inStock: false },
    { name: "Watch", price: 10000, inStock: true },
    { name: "Tablet", price: 25000, inStock: true }
];
let InstockProducts = products.filter(pro=>pro.inStock==true).reduce((acc,curr)=>{
    return acc+curr.price
},0)
console.log(InstockProducts)