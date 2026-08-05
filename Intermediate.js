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
        age: 20,
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


let ActiveUsers = users.filter(user=>user.isActive==true).map(user=>user.name)
console.log(ActiveUsers)
