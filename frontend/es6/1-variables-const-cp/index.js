// Deklarasikan nama variabel didalam block scope menggunakan let.
// Ubah nilai kota pada fungsi berikut ini, tanpa membuat variabel baru

function constantNoChange() {
  let kota = "Tanggerang";
  // TODO: answer here
  kota = "Surabaya";
  return kota;
}

console.log(constantNoChange());

module.exports = constantNoChange

