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


//access charracters in a string 
let temp = "Sakshi"

console.log(name.charAt(1))
console.log(name[1])
console.log(name[0])
//what is Object.defineProperty()??
//convert string to the array 


let str1 = "apple"
let str2 = "Apple"
console.log(str1===str2)
console.log(str1.toLowerCase()==str2.toLowerCase())

console.log("apple"<"banana")
//Find Characters unicode Value
console.log("a".charCodeAt(0))
console.log("A".charCodeAt(0))

//using localeCompare() method for comparing two strings
console.log("apple">"banana")
console.log("apple".localeCompare("banana"))
console.log("2">"10")
console.log("2".charCodeAt(0))
console.log("10".charCodeAt(0))


//String Methods 
//valueOf() method returns the primitive value of a String object.
let littlestr = new String("Hello World")
console.log(typeof(littlestr))
let str = new String("Hello World");
console.log(typeof(str.valueOf()))

//Symbols are primitive data types that are unique and immutable. They are often used as keys in objects to avoid name collisions. Each time you create a symbol, it is guaranteed to be unique, even if it has the same description as another symbol.
const sym1 = Symbol('Identifier for K1')
const sym2 = 
console.log(sym1)
const k1 = Symbol()
const k2 = Symbol()
myobj={}
myobj[k1]="sakshi"
myobj[k2]="shalin";
console.log(myobj[k1])
console.log(myobj[k2])
//symbols are ignored in for...in loop and Object.keys() method but they are not ignored in Object.getOwnPropertySymbols() method 
for(let key in myobj){
    console.log(key,myObj[key])

}
