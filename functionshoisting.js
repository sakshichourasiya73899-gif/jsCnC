//Function declarations are fully hoisted — you can call them before they appear in code.
console.log(fact())
function fact(){
  return "factorial"
}

// Function expressions (including arrow functions) are NOT hoisted the same way — the variable is hoisted but stays undefined until the assignment line runs (TDZ if let/const).

console.log(age)
let age = "21"