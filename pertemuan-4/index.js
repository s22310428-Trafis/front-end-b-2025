//JavaScript Function

//Cara 1. Function Declaration
function greetings()
{
    console.log("Hello World")
}

greetings() //Call Function

//Cara 2. Function expression
// const greetings2 = function ()
// { 
//      console.log("Hello World2")
// }

// greetings()

// //Function with input (parameter & argument)
// //And output (return value)

function greetings(fulName)
{
    return "Hello" + fulName
}

//Argumen
let output = greetings("John Doe")
console.log(output)

const greetings2 = function (fullName)
{
     return "Hello" + fullName
}

let output2 = greetings2("Jane Doe")
console.log(output2)

//global, local, block scope dari variable
let x = 10
console.log(x) //10
function func1()
{
    let y = 20
    console.log(x) //10
    console.log(y) //20
    if(true)
    {
        let z = 30
        console.log(x) //10
        console.log(y) //20
        console.log(z) //30
    }
}
// console.log(y)
func1()

//mini exercise
//modifikasi mini exercise sebelumnya tentang menghitung BMI dengan
//menggunakan fungsi dimana fungsi tersebut memiliki input dan output
//berat & tinggi sebagai input dan BMI sebagai output

function calculateBMI(berat, tinggi)
{
    let bmi = berat / (tinggi * tinggi)
    return bmi > 25 ? "BMI anda adalah" + BMI + "kategori kelebihan berat badan" + BMI + "Kategori berat badan normal"
}

let output = calculateBMI(62, 1.6)
console.log(output) 

//pelajari di rumah tentang IIFB & callback function
