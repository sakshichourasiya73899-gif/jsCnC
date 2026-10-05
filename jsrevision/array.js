// const user = {
//     name:"Sakshi",
//     age:"21",
//     isloggedIn:"true"
// }

//const result = array.filter(callback)

// const users = ["Sakshi", "Rohit", "Aman"];

// users.filter((user, index, array) => {
//     console.log(user);
//     console.log(index);
//     console.log(array);
// });

const name = ["sakshi","shalini","anuska"]
console.log( name.filter(name=>{
   return name[0]=="shalini"
 }))

 //check if it's mutating 
 //does it return new array

//  const values = [0,1,"" ,"hello",null,undefined,{},[]]
//  const result = values.filter(value=>value)
//  console.log(result)


 const user = [
    {name:"A", active:true},
    {name:"B", active:false}
 ];

 const activeUsers = user.filter(user=>user.active);
 activeUsers[0].name = "changed"
console.log(user[0]===activeUsers[0])
 console.log(user)
 console.log(activeUsers)