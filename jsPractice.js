const person = {
    name:"Sakshi",
    address:{
        city:"Bhilai"
    }
}
console.log(person.address.city)
const copyPerson = {...person}
console.log(copyPerson)
console.log(person===copyPerson)
console.log(copyPerson.address===person.address)
console.log(copyPerson)
copyPerson.address.city = "Delhi"
console.log(person.address.city)

