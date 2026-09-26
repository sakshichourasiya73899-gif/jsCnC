


const user = {
    name: "Sakshi",
    address: {
        city: "Delhi"
    }
};

const copy = {...user}
user.name = "Shalini"
copy.address = "mumbai"
console.log(user)
console.log(copy)