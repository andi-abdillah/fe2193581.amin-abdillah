/**
 * Jumlahkan semua elemen angka dalam sebuah array
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 8
 */

 const sumTotalArray = (numbers) => {
    // TODO: answer here
    const total = numbers.reduce((previous, current)=> previous + current);
    return total;
  };

  let Input = [1, 1, 1, 5];
  console.log(sumTotalArray(Input));
  
  module.exports = sumTotalArray
