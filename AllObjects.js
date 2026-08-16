const requestBody = {
    username: "sakshi",
    email: "sakshi@example.com",
    password: "123456",
    age: 21
};

const allowedFields = [
    "username",
    "email",
    "password"
];

const  reveivedFields = Object.keys(requestBody)
console.log(reveivedFields)

const invalidFields = reveivedFields.filter(field=>{
    return (!allowedFields.includes(field))
})
console.log(invalidFields)