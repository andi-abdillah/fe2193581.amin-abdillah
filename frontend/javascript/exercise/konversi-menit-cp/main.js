/**
 * Konversikan menit pada paramter menjadi satuan jam.
 * Misal: 
 * - 99 menjadi "1:39"
 * - 132 menjadi "2:12"
 * 
 * notes:
 * - type data pada parameter akan selalu INTEGER
 * - type data pada result akan selalu berupa STRING
 */


function konversiMenit(menit) {
  // TODO: answer here
  var jam = Math.floor(menit / 60);
  var menit = menit % 60;
  var result = "";
  if (menit < 10) {
    menit = '0' + menit;
  }
  // console.log(typeof(menit));
  // console.log(typeof(result));
  return result = jam + ':' + menit;
}

console.log(konversiMenit(61));
console.log(konversiMenit(94));
console.log(konversiMenit(51));
console.log(konversiMenit(187));
module.exports = konversiMenit;