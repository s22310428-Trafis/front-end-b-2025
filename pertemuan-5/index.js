// const { useDebugValue } = require("react")

// IIFE & Callback Function
// 1. IIFE (Immediately invoked function expression)
// Self-executing anonymous Function
// (function ()){
//     console.log("Hello world");
// })();
// IIFE with parameter & return useDebugValue
// let output = (function (fullName)(
//     console.log("Hello World")
// })("John Doe")
// console.log(output);

// 2. callback Function
// function passed into another function as an argument

// function greetings(callback){
//     Callback()
// }
// callback must be annonymus function
// greeting (function{} {
//     console.log("Hello Callback")
// });

// Callback function eith parameter and return
function greetings(callback) {
    let result = callback ("john doe");
    return result;
}

// Callback must be an anonymous function
let output = greetings(function(fullName){
     return "Hello" + fullName;
});
console.log(output)

//Exerise 1
//buatlah program untuk menghitung BMI dimana menggunakan
//1. IIFE
//2. Callback Funciton
//yang meniliki parameter dan return value