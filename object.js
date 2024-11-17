// 

//const tinderUser =new Object()
const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.isLoggedIn= false;
//console.log(tinderUser)

const regularUser ={
    email: "Some2GMAIL.com",
    fullname:{
        userfullname: {
            firstname:"Abhishek",
            lastname:"Chaudhary"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstname)
const obj1={
    1:"a",2:"b"
}
const obj2={
    3:"c",4:"d"

}

const obj3= Object.assign({},obj1,obj2)

//const obj3 = {obj1, obj2}

console.log(obj3);
const obj5 = {...obj1,...obj2}

const users={
    id:1,
    email:"h@gmail.com"
}

console.log(Object.keys(tinderUser));
console.log(object.values((tinderUser)))
console.log(object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'));