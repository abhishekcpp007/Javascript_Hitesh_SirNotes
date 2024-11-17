// Singleton 
// object literals
// Object.create-> This is constructor method in this singleton created 

const mySym = Symbol("key1")


const JsUer={
    name:"John",
    //mySym:"not a symbol notation",
    [mySym]:"This is symbol notation",
    age:30,
    arr:['Abhi','Kabhi','Nabhi'],
    "first name": "Abhishek",
    email:"ssrha@yahoo.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUer.name);
//console.log(JsUer.first name)
console.log(JsUer["first name"])
console.log( typeof JsUer[mySym]) // This will print "This is symbol notation"
console.log(typeof JsUer.mySym);
console.log(JsUer)
JsUer.email ="Hitesh@chatgpt@.com"
Object.freeze(JsUer)
JsUer.email = "hitesh@microsoft.com"
console.log(JsUer);