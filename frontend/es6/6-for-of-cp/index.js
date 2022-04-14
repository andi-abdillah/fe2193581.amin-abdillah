/**
 * Tampilkan tipe data dari setiap elemen array
 * Input: ["A", 3, [2]]
 * Output: ["string", "number", "object"]
 *
 * Hint:
 * - Untuk pengecekan tipe data kalian dapat menggunakan typeof
 * - Pastikan menggunakan for-of untuk perulangan
 */

const convertElementToType = (array) => {
  // TODO: answer herea
  let result = [];
  for(let i=0; i<array.length; i++){
    result.push(typeof array[i]);
  }
  return result;
};

let input = ["A", 3, [2]]
console.log(convertElementToType(input));

module.exports = convertElementToType