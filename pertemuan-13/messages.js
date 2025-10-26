import helloWorld from './helloWorld.js';

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}
messages();

// Mengapa kita perlu menambahkan await di dalam messages?
// Karena function helloWorld mengembalikan sebuah promise tanpa await kita tidak bisa mengambil hasil dari promise