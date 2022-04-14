/**
 * Cari nilai tertinggi dari array menggunakan reduce
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 5
 *
 * Catatan: Tidak boleh menggunakan perintah Math.max().
 */

const maxFromArray = (numbers) => {
  // TODO: answer here
  const max = numbers.reduce((prevValue, currentValue)=> {
    if(currentValue > prevValue){
      return currentValue;
    } else {
      return prevValue;
    }
  });
  return max;
};

let numbers = [1, 1, 1, 5];
console.log(maxFromArray(numbers))

module.exports = maxFromArray