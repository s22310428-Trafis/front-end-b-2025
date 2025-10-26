//Destructuring & Module
//1. Destructuring Array & Object

let numbers = [1,2,3,4,5];

// //Destructuring Array
// let num1 = numbers [0];
// let num2 = numbers [1];
// let num3 = numbers [2];
// let num4 = numbers [4];
// let num5 = numbers [5];

// const [num1, num2, num3, num4, num5]  = numbers;
// console.log(num1, num2, num3, num4, num5)

//Destructuring sebagian item dlm array
// const [, num2, num3, ,]  = numbers;
// console.log(num2, num3)

// //Destructuring dengan rest parameter
// const [num1, ...rest] = numbers;
// console.log(num1,rest)

//Destructuring Obejct
// const student1 = {
//     fullName: "John",
//     age: 25,
//     status: "active",
// };

//const fullName = student1.fullName;
//const age = student1.age;
//const staus = student1.status;

// const { fullName, age, status} = student1;
// console.log(fullName, age, status);

//Destructuring object dengan rest
//Tipe data rest parameter pada object adalah bertipe object
const { fullName, ...rest } = student1;
console.log(fullName);
console.log(rest);

// Mini exercise
// Lihat exercise 4 modifikasi di bagian yang dapat dibuat 
// distructuring array/object

// Module
import { student, numbers } from './data'
console.log(student1)
console.log(numbers)