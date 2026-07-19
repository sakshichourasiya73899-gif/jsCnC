let myarray = [1,2,3,4]
myarray.push(9)
myarray.pop()
myarray.unshift(9)
myarray.shift()
console.log(myarray.includes(9))
console.log(myarray.indexOf(9))
const newArr = myarray.join()
console.log(typeof newArr)
console.log(myarray)
console.log("Hiii")

//slice and splice
console.log("A ",myarray)
const myn1 = myarray.slice(1,3)
console.log(myn1)
console.log("B ",myarray)

const myn2 = myarray.splice(1,3)
console.log(myn2)
console.log(myarray)