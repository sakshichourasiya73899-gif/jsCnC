let users = [
    {
        name: "Alice",
        age: 22,
        premium: true,
        orders: 12
    },
    {
        name: "Bob",
        age: 17,
        premium: false,
        orders: 3
    },
    {
        name: "Charlie",
        age: 28,
        premium: true,
        orders: 18
    },
    {
        name: "David",
        age: 30,
        premium: false,
        orders: 10
    },
    {
        name: "Emma",
        age: 19,
        premium: true,
        orders: 8
    }
];

let filerUser = users.filter(user=>{
  return user.premium==true
}
).sort((a,b)=>{
  return (a.orders-b.orders)
}).reverse()
console.log(filerUser)
let nums = [2,3,4,5]
let reversed = nums.reduce((acc,curr)=>{
   acc.unshift(curr)
    console.log(acc)
   return acc;
  
   
},[])
//console.log(reversed)