const user = {
    name: "Sakshi",

    greet: function () {
        console.log(this);
    }
};

user.greet();


const user1 = {
    name: "Sakshi",
    greet: function () {
        console.log(this.name);
    }
};

const user2 = {
    name: "Rahul",
    greet: user1.greet
};

user2.greet();

function show() {
    console.log(this);
}

show();




const person = {
    name:"sakshi"
}

function testuser(user){
    console.log(user === person)
    user.name = "Shalini"
    console.log(user)
    console.log(user===person)
}

testuser(person)