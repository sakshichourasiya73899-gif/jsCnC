const user = {
    id: 101,
    name: "Sakshi",
    email: "sakshi@example.com",
    currency: "INR"
};

const transactions = [
    {
        id: 1,
        type: "expense",
        category: "Food",
        amount: 250,
        description: "Lunch"
    },
    {
        id: 2,
        type: "income",
        category: "Salary",
        amount: 30000,
        description: "August salary"
    },
    {
        id: 3,
        type: "expense",
        category: "Transport",
        amount: 100,
        description: "Auto"
    }
];

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(user)
console.log(typeof user)
console.log({...user})




