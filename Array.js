let myarray = [1,2,3,4]
myarray.push(9)
myarray.pop()
myarray.unshift(9)
myarray.shift()
console.log(myarray.unshift(9))
console.log(myarray.shift())
console.log(myarray.includes(9))
console.log(myarray.indexOf(9))
console.log(myarray)
// const newArr = myarray.join()
// console.log(typeof newArr)
// console.log(myarray)
// console.log("Hiii")

// //slice and splice
// console.log("A ",myarray)
// const myn1 = myarray.slice(1,3)
// console.log(myn1)
// console.log("B ",myarray)

// const myn2 = myarray.splice(1,3)
// console.log(myn2)
// console.log(myarray)
let marvel_heros = ['spiderman','Ironman']
let DC_Heros = ['Superman','batman','flash']
const allHeros = marvel_heros.concat(DC_Heros)
console.log(allHeros)
const all_new_heros = [...marvel_heros, ...DC_Heros]
console.log(all_new_heros)
let allarray = [1,2,3,[4,5,6],[7,8,9]]
console.log(allarray)
let allnewarray = allarray.flat(Infinity)
console.log(allnewarray)
console.log(Array.isArray("Sakshi"))
console.log(Array.from("Sakshi"))
console.log(Array.from({name:"hitesh"}))//interesting
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
