/**
 * Ambil semua element yang dengan digt yang ditentukan
 * - fungsi akan menerima dua argumen
 * - argumen pertama array angka
 * - argumen kedua berapa digit yang akan di filter
 * Contoh
 *  input: [88, 44, 3, 8481, 444], 2
 *  output: [88, 44]
 *
 */

const filterDigit = (array, digit) => {
  // TODO: answer here
  let result = [];
  for(let i=0; i<array.length; i++){
    if(array[i].toString().length === digit){
      result.push(array[i]);
    }
  }
  return result;
};
let array = [88, 44, 3, 8481, 444];
let digit = 2;

console.log(filterDigit(array, digit));

module.exports = filterDigit
