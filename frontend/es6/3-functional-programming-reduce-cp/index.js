/**
 * Jumlahkan semua elemen angka dalam sebuah array
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 8
 */

 const sumTotalArray = (numbers) => {
    // TODO: answer here
    let result = 0;
    for(let i=0; i<numbers.length; i++){
      result += numbers[i];
    }
    return result;
  };

  let Input = [1, 1, 1, 5];
  console.log(sumTotalArray(Input));
  
  module.exports = sumTotalArray