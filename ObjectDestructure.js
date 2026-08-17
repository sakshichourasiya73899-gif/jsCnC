

//Objects Destructuring

const product = {
    id: 101,
    title: "Keyboard",
    price: 2499,
    category: "Electronics"
};

const {title:T,category:C} = product;
console.log(T);
console.log(C);

//Array Destructuring

const products = [
    {
        id: 101,
        name: "Keyboard",
        price: 2499
    },
    {
        id: 102,
        name: "Mouse",
        price: 1299
    },
    {
        id: 103,
        name: "Headphones",
        price: 1999
    }
];


const firstProduct = products[0];
console.log(firstProduct.price);