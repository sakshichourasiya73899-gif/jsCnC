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

const user = {
    name: "Sakshi",
    email: "sakshi@example.com",
    role: "admin",
    verified: true
};

Object.entries(user).forEach(([key,value])=>{
    console.log(`${key}:${value}`)
})


const user1= {
    id: 101,
    username: "sakshi",
    email: "sakshi@example.com",
    passwordHash: "abc123",
    refreshToken: "xyz456",
    role: "user"
};
//Send only this
// {
//     id: 101,
//     username: "sakshi",
//     email: "sakshi@example.com",
//     role: "user"
// }

const sensitiveFields = [
    "passwordHash",
    "refreshToken"
]

const SafeUser = Object.fromEntries(
    Object.entries(user1).filter(([key])=>{
        return(!sensitiveFields.includes(key))
    })
)
console.log(SafeUser)