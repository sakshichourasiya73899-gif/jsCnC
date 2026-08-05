let users = [
    {name:"Alice", age:20},
    {name:"Bob", age:17},
    {name:"Charlie", age:25}
];
//Get the names of adults only "If I want the Array then use map"
let getAdult = users.filter(user=>user.age>=18).map(user=>user.name)
console.log(getAdult)

