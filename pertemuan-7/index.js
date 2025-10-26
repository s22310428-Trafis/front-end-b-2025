// //JavaScript Conditional
// //1. JavaScript Conditional
// let suhu = 38
// if (suhu >=37) {
//     console.log("Suhu Panas")
// } else {
//     console.log("Suhu Normal")
// }

// //b. if-else if-else
// //Jika nilai 91 - 100 nilai A
// //Jika nilai 81 - 90 nilai B
// //Jika nilai 71 - 80 nilai C
// //Jika nilai  <= 70 nilai D
// let nilai = 85;
// if(nilai >=91 && nilai <=100){
//     console.log ("Nilai A");
// } else if (nilai >=81 && nilai <=90){
//     console.log ("Nilai B");
// } else if (nilai >=71 && nilai <=80){
//     console.log("Nilai C");
// } else if (nilai <=70){
//     console.log("Nilai D");
// } else {
//     console.log("Out of Ran;ge")
// }

// //3. switch - case
// let hari = 1
// switch(hari) {
//     case 1: //if (hari == 1 )
//         console.log("minggu");
//         break;
//     case 1: //if (hari == 1 )
//         console.log("senin");
//         break;
//     case 1: //if (hari == 1 )
//         console.log("selasa");
//         break;
//     case 1: //if (hari == 1 )
//         console.log("rabu");
//         break;
//     case 1: //if (hari == 1 )
//         console.log("kamis");
//         break;
//     case 1: //if (hari == 1 )
//         console.log("jumat");
//         break;
//     case 1: //if (hari == 1 )
//         console.log("sabtu");
        
// }

// //2. JavaScript Loop
// //a. for-loop
// for (let i=0;i<10;i++){
//     console.log(i);
// }

// //b. while-loop
// let i = 1;
// while (i <=10){
//     console.log(i)
//     i++;
// }

// //c. do-while
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

//Array  build-in method
// let numbers = [1,2,3,4];

// console.log (numbers);
// for(let i = 0; i< numbers.length; i++) {
//     console.log(numbers[i])
// }                   

// //1 forEach()
// numbers.forEach(function(value) {
//     console.log(value);
// })
 
// //2. map()
// let output =numbers.map(function (value) {
//     console.log(value);
// })

// //3. filter()
// let output = numbers.filter(funtion (value) {
//     return value > 2;
// });
// console.log(output)

//4. fint()
// let output = numbers.find(function (value){
//     return value >2;
// })
// console.log(output);