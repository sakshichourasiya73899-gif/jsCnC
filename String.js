let name = "sakshi"
let secondName = "shalini"
//string interpolation 
console.log(`Hello first name is ${name} and Second name is ${secondName}`)
//go through all of the methods of the string

let thirdName = new String('Anushka');
console.log(thirdName)
console.log(typeof(thirdName))
console.log(thirdName.__proto__)
console.log(thirdName.length)
console.log(thirdName.charAt(2))
console.log(thirdName.indexOf('a'))
const newString = thirdName.substring(0,4)
console.log(newString)
const anotherstring = thirdName.slice(-7,3)
console.log(anotherstring)
const trimTest = "   sakshi"
console.log(trimTest)
console.log(trimTest.trim()) //read mdn docs
const url = "https://sakshi.com/%20/login"
console.log(url.replace('%20',"__"))
console.log(url.includes('sakshi'))
console.log(url.includes('shalini'))

//convert string to the array 