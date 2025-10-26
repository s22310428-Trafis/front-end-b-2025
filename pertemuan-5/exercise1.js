//Nama : Lompoliuw, Trafis Ensi
//1. IIFE

// IIFE untuk menghitung BMI
const hasilBMI = (function(berat, tinggi) {
    const bmi = berat / (tinggi * tinggi);
    return bmi;
})(63, 1.68); 

console.log(`BMI Anda adalah: ${hasilBMI.toFixed(2)}`);

//2. Callback Function
function hitungBMI(berat, tinggi) {
    return berat / (tinggi * tinggi);
}

function prosesBMI(berat, tinggi, callback) {
    return callback(berat, tinggi);
}

let BMI = prosesBMI(63, 1., hitungBMI);
let hasil = BMI > 25 
    ? "BMI Anda adalah " + BMI.toFixed(2) + " → Kategori: Kelebihan berat badan" 
    : "BMI Anda adalah " + BMI.toFixed(2) + " → Kategori: Berat badan normal";

console.log(hasil);

