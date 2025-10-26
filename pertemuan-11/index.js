// Rest Parammeter dan spread Operator
// 1. Rest Parameter

// //function tanpa rest parameter
// const funct1 = (param1, param2, param3) => {
//     console.log(param1, param2, param3);
// }

// funct1("A", "B", "C")

// const funct1 = (...rest) => {
//     let hasil = 0
//     rest.forEach((item) => (hasil += item));
//     console.log(hasil);
// };

// funct (1,2,3,4,5,6,7,8,9,10,11,12,13);

// 2. Spread Operation
const numbers = [1,2,3,4,5]
console.log(numbers)
console.log(...numbers);

// kegunaan spread operation pada Array
// 1. Duplikat array
const numbers2 = [...numbers]
console.log(numbers2);
// 2. Menggabungkan array

