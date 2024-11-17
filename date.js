let myCreatedDate = new Date(2023, 0, 23);
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
let newDate = new Date();
console.log(newDate);

// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// console.log(newDate.get
// console.log(newDate.toDateString());

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
})