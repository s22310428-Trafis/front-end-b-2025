//Ubahlah syntax ES5 berikut ke dalam ES6

//1
// function calculateAge(birthYear){
// 	return 2019 - birthYear;
// }

// function yearUntilRetirement(object){
// 	var age = calculateAge(object.year);
// 	var retirement = 60 - age;

// 	if(retirement > 0){
//     	console.log(object.firstName + ' retires in '+ retirement + ' years');
// 	} else {
//     	console.log(object.firstName + ' is already retired.');
// 	}
// }

// yearUntilRetirement({year: 1987, firstName: 'John'});

//2.
// const addNumber = (a, b, c, d, e, f, g) => {
//  	var numbers = [a, b, c, d, e, f, g];
//  	var sum = 0;
//     //Change to map function
//  	for(var i=0;i<numbers.length;i++){
//      		sum += numbers[i];
//  	}
//  	return sum;
//  }

// console.log(addNumber(1,2,3,4,5,6,7));

//3.

// var phi = 3.14;
// var power = 2;
// var radius = 0;

// var calculateArea = function (obj) {
//   return phi * Math.pow(obj.radius, obj.power);
// };

// radius = 21;
// var area21 = calculateArea({radius: radius, power: 2 });

// radius = 7;
// var area7 = calculateArea({radius: radius, power: 2 });

// console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);

// 4.
// const makeAjaxRequest = (url, method) => {
// if(!method){
//    	method = 'GET'
// }
// console.log(url, method);
// }

// makeAjaxRequest('www.google.com');

// 1. Menggunakan let & const, String Literal, Arrow Function, Default Parameter

// Fungsi menghitung usia
const calculateAge = birthYear => 2025 - birthYear; 

// Fungsi menghitung tahun pensiun
const yearUntilRetirement = (person) => {
  const age = calculateAge(person.year);
  const retirement = 60 - age;

  // Menggunakan string literal dengan gaya berbeda
  const message = retirement > 0
    ? `${person.firstName} will retire in ${retirement} years.`
    : `${person.firstName} is already retired.`;

  console.log(message);
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

// 2. Menjumlahkan angka menggunakan arrow function dan `map` untuk loop
const addNumber = (a, b, c, d, e, f, g) => {
  const numbers = [a, b, c, d, e, f, g];
  return numbers.reduce((sum, num) => sum + num, 0); 
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3. Menghitung luas lingkaran menggunakan let & const, string literal
const PI = 3.14;
const power = 2;
let radius = 0;

const calculateArea = ({ radius, power }) => PI * Math.pow(radius, power);

radius = 21;
const area21 = calculateArea({ radius, power });

radius = 7;
const area7 = calculateArea({ radius, power });

console.log(`The area with radius 21 is: ${area21}, and the area with radius 7 is: ${area7}`);

// 4. Default parameter dalam arrow function
const makeAjaxRequest = (url, method = 'GET') => {
  console.log(`Making a ${method} request to: ${url}`);
};

makeAjaxRequest('https://www.google.com');  
