//` ${}`
//1 push digunakan untuk menambahkan data baru di akhir

const num1 = [1, 2, 3];
num1.push(4);
console.log(`push = ${num1}`);

//2 pop digunakan untuk menghapus item terakhir

const num2 = [1, 2, 3];
num2.pop();
console.log(`pop = ${num2}`);

//3 unshift digunakan untuk menambah item baru di awal

const num3 = [1, 2];
num3.unshift(3, 4);
console.log(`inshift = ${num3}`);

//4 shift digunakan untuk menghapus item pertama

const num4 = [1, 2, 3];
num4.shift();
console.log(`shift = ${num4}`);

//5 sort digunakan untuk mengurutkan item

const num5 = [1, 23, 51, 4, 7, 12, 58, 35, 100];
num5.sort(function (a, b) {
  return a - b;
}); // return b-a
console.log(`sort = ${num5}`);

//6 includes digunakan untuk mengecek apakah sebuah array memiliki element tertentu

const buah1 = ["apel", "mangga", "pisang"];
const cekInclude = buah1.includes("apel");
console.log(`includes = ${cekInclude}`);

//7 indexof digunakan untuk mencari letak sebuah item

const buah2 = ["apel", "mangga", "pisang"];
const cekIndexOf = buah2.indexOf("mangga");
console.log(`indexof = ${cekIndexOf}`);

//8 slice digunakan untuk memilih satu atau beberapa item

const buah3 = ["apel", "mangga", "pisang", "alpukat", "jambu", "semangka"];
const cekSlice = buah3.slice(1, 5);
console.log(`slice = ${cekSlice}`);

//9 splice digunakan untuk menambahkan, menghapus, atau mereplace item

const buah4 = ["apel", "mangga", "pisang", "alpukat", "jambu", "semangka"];
const cekSplice = buah4.splice(0, 2);
console.log(`splice = ${cekSplice}`);

//10 concat  digunakan untuk menggabungkan 2 atau lebih array

const warna1 = ["merah", "biru"];
const warna2 = ["hijau", "kuning"];
const warna3 = ["hitam", "putih"];
const semuaWarna = warna1.concat(warna2, warna3);
console.log(`concat = ${semuaWarna}`);
