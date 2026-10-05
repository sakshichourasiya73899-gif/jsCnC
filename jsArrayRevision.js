const orders = [
  {
    id: 101,
    customer: "Sakshi",
    status: "delivered",
    amount: 2499,
    items: ["Laptop Stand", "Keyboard"],
    payment: "paid",
    createdAt: "2026-08-10"
  },
  {
    id: 102,
    customer: "Rohit",
    status: "pending",
    amount: 1599,
    items: ["Mouse"],
    payment: "pending",
    createdAt: "2026-08-11"
  },
  {
    id: 103,
    customer: "Ananya",
    status: "cancelled",
    amount: 3999,
    items: ["Headphones", "Mouse"],
    payment: "refunded",
    createdAt: "2026-08-09"
  },
  {
    id: 104,
    customer: "Rahul",
    status: "delivered",
    amount: 5499,
    items: ["Monitor"],
    payment: "paid",
    createdAt: "2026-08-12"
  },
  {
    id: 105,
    customer: "Priya",
    status: "delivered",
    amount: 899,
    items: ["Mouse Pad"],
    payment: "paid",
    createdAt: "2026-08-13"
  }
];
console.log(orders.length)

orders.forEach(orders=>{
    console.log(orders.id,orders.customer)
})

const customer = orders.map(order=>{
    return order.customer
})
console.log(customer)

const deliveredOrders = orders.filter(order=>{
    return order.status === "delivered"
})
console.log(deliveredOrders)

const order = orders.find(order=>{
   return order.customer === "Rohit"
})
console.log(order)