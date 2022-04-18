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
  const filterDigit = array.filter(item => {
    if(item.toString().length === digit){
      return item;
    }
  });
  return filterDigit;
};
let array = [88, 44, 3, 8481, 444];
let digit = 2;

console.log(filterDigit(array, digit));

module.exports = filterDigit
