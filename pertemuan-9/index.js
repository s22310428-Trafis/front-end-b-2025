//String Literal, Arrow Function, Default Parameter
//1. String Literals
let fullName = "John Doe"
let age = 30;
let address = "Manado"

//Hallo, nama saya John Doe, umur saya 30 tahun
//dan saya tinggal di Manado

let kalimat = "Halo, nama saya" + fullName + ",umur saya" + age + "tahun dan saya tinggal di" + address;
console.log(kalimat);

let kalimat2 = 'Halo, nama saya ${fullName}, umur saya ${age}, tahun, dan saya tinggal ${address}';
console.log(kalimat2)

//2. Arrow function
function sayGreetings(fullName) {
    return 'Hello my name is ${fullName}';
}
console.log(sayGreetings("John Doe"));

const sayGreetings2 = (fullName) => {
    return 'Hello my name is ${fullName}';
};
console.log(sayGreetings2)

