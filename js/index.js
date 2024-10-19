// For Each metodi
// 1-masala
// let arr = [1,2,3,4,4,5,]
// arr.forEach(function(value){
//     console.log(value);
// })

// 2-masala

// let massive = [1,2,3,4,5];

// massive.forEach(function(value) {
//    value += 5;
//    console.log(value);
// })

// 3-masala

// let massive = [1,2,3,4,5,6,7,8,9];
// massive.forEach(function(value) {
//     if (value % 2 == 1) {
//         console.log(value);
//     }
// })

// 4-masala
// let numberOfElements = [1,2,3,4,5];
// numberOfElements.forEach(function(){
//     console.log(numberOfElements.length);
// })

// 5-masala

// let moveToTheNewMAssive = [1,2,3,4,5];
// let res =[];
// moveToTheNewMAssive.forEach(function(value){
//     res.push([value])
// })
// console.log(res);

// Map masalalari

// 1-masala

// let arr = [1,2,3,4,5,6,7,8,9];
// let res = arr.map(function(value){
//     return value * 2
// })
// console.log(res);

// 2-masala

// let arr = [1,2,3,4,5,6,7];
// let res = arr.map(function(value){
//     return value ** 2;
// })
// console.log(res);

// 3-masala

// let arr = ["salom", "xayr"];
// let res = arr.map(function(value){
//    if (typeof value == "string") {
//     return value.toUpperCase()
//    } else return value;
// })
// console.log(res);

// 4-masala

// let arr = [1,2,3,4,5,5,6];
// let res = arr.map(function(value){
// if (typeof value == "number") {
//     return -value
// } else return value
// })
// console.log(res);

// 5-masala

// let arr = [1,2,3];
// let res = arr.map(function(value) {
//    value + 3;
// })
// console.log(res);

// Filter masalalari

// 1-masala

// let arr = [1,2,3,4];
// let res = arr.filter(function(value) {
//     return value % 2 == 0
// })
// console.log(res);

// 2-masala

// let arr = [1,2,3,-5];
// let res = arr.filter(function(value){
//     return value > 0
// })
// console.log(res);

// 3-masala

// let arr = ["Salom", "xayr", "mutalibov", "nega"];
// let res = arr.filter(function(value){
//     if (typeof value == "string") {
//        return value.length >= 5
//     }
// })
// console.log(res);

// 4-masala

// let age = [18,19,20,21,17,16,15];
// let res = age.filter(function(value){
//     if (value >= 18 ) {
//         return value
//     }
// })
// console.log(res);

// 5-masala

// let arr = [5,6,7,8,9,10,11];
// let res = arr.filter(function(value){
//     return value <= 10;
// })
// console.log(res);


// Find bilan berilibdi lekin find bilan yechish imkonsiz, shuning uchun filter orqlai yechishga qaror qildim

// Find

// 1 - misol

// let arr = [10,11,12,13,14,1,2,3];
// let res = arr.filter(function(value){
//     return value >= 10
// })
// console.log(res);

// 2-misol

// let arr = [1,2,3,4,5,-1,-2,-3,-4,-5];
// let res = arr.filter(function(value){
//     return value > 0
// })
// console.log(res);

// 3-misol

// let arr = ["salom", "xayr", "sen", "men"];
// let res = arr.filter(function(value){
//     if (typeof value === "string"){
//         return value.length >= 4
//     }
// })
// console.log(res);

// 4-misol

// let arr = [1,2,3,4];
// let res = arr.filter(function(value){
//     return value % 2 == 0
// })
// console.log(res);

// 5-masala

// let arr = [1,2,3,4,5,0,-1,-2];
// let res = arr.filter(function(value){
//     return value >= 0
// })
// console.log(res);

// Some va everyga oid masalalar

// Some

// 1-masala

// let arr = [1,2,3,4,5,6,7,8,-1,-2];
// let res = arr.some(function(value){
//     return value <= 0 
// })
// console.log(res);

// 2-masala

// let arr = [1,2,3,4,5];
// let res = some.arr(function(value){
//     return value % 2 == 0
// })
// console.log(res);

// 3-masala

// let arr = ["salom", 'no'];
// let res = arr.some(function(value){
//     return value == "apple"
// })
// console.log(res);

// Every

// 4-masala

// let arr = [1,2,3,4,-1,-2,-3,-4];
// let res = arr.every(function(value){
//     return value > 0
// })
// console.log(res);

// 5-masala

// let arr = ["salom","xayr"];
// let res = arr.every(function(value){
//    return typeof value == "string"
// })
// console.log(res);

// 6-masala

let arr = [101,102,103];
let res = arr.every(function(value){
    return value > 100
})
console.log(res);









































