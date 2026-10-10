function outer() {
    count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}

const first = outer();
const second = outer();

console.log(first())
console.log(second())
