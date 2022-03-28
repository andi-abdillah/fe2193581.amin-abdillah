// Mengembalikan pola * yang menurun di setiap barisnya
//
// contoh: 
// baris = 5
// hasil:
// *****
// ****
// ***
// **
// *

// Masukan jumlah baris
const n = 5;

let hasil = '';
for (let i = 1; i < n; i++) {
    for (let j = n; j > i; j--) {
        hasil += '*';
    }
    hasil += '\n';
}
console.log(hasil);
