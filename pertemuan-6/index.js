let suhu = 35;
if (suhu >=38){
    console.log("suhu panas");
} else {
    console.log("suhu normal")
}

let nilai = 85;
if(nilai >= 91 && nilai <= 100) {
    console.log("Grade A");
} else if (nilai >= 81 && nilai <= 90) {
    console.log("Grade B");
} else if (nilai >= 71 && nilai <= 80) {
    console.log("Grade C");
} else if (nilai < 71) {
    console.log("Grade D");
} else {
    console.log("Out of range");
}

//switch - case
let hari = 1;
switch(hari){
    case 1: // If (hari == 1)
        console.log ("Hari Minggu");
        break;
    case 2: // If (hari == 2)
        console.log ("Hari Senin");
        break;
    case 3: // If (hari == 3)
        console.log ("Hari Selasa");
        break;
    case 4: // If (hari == 4)
        console.log ("Hari Rabu");
        break;
    case 5: // If (hari == 5)
        console.log ("Hari Kamis");
        break;
    case 6: // If (hari == 6)
        console.log ("Hari Jumat");
        break;
    case 7: // If (hari == 7)
        console.log ("Hari Sabtu");
        break;
}

// 2. JavaScript Looping
// for - loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//while loop
let i = 1;
while(i <= 10) {
    console.log(i);
    i++
}
let numbers = [1, 2, 3, 4, 5,];
console.log(numbers);

for(let i = 0; i < 5; i++) {
    console.log(numbers[1]);
}

// Array built-in method
//1 forfach()
numbers.forEach(function(value){
    console.log(value);
});

//2.Map()
let output = numbers.map(function(value){
    return value + 2;
})
console.log(output)
