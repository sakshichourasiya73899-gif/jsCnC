function addTwoNumbers(number1,number2){
    return (number1+number2)
  // console.log( number1+number2)
}
let result = addTwoNumbers(3,4)
console.log(result)

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just loggedIn`
}
// let loginUser = loginUserMessage("")
// console.log(loginUser)
console.log(loginUserMessage("Sakshi"))