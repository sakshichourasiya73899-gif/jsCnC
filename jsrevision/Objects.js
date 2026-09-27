


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

const getuser = async (id)=>{
   if(!id){
    throw new Error("id not found...!");
   }

   return{
    id:id,
    name:"sakshi"
   }
}
const main = async ()=>{
    try{
        const user = getuser()
        console.log(`${user} found....!!!`)
    }
    catch(error){
        console.log(error.message);
        
    }
   
}

main();
