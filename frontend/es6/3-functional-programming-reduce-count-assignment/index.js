/**
 * Hitung berapa banyak pengulangan angka dari array berikut dan kembalikan dalam bentuk key-value
 * Contoh:
 *  Input: [1, 1, 1, 5, 5, 10, 9]
 *  Output: {1: 3, 5: 2, 10: 1, 9: 1}
 *
 */

const countRepetition = (numbers) => {
  // TODO: answer here
  let repetition = {};
  for(let i=0; i<numbers.length; i++){
    if(repetition[numbers[i]]){
      repetition[numbers[i]] += 1;
    } else {
      repetition[numbers[i]] = 1;
    }
    // console.log(repetition);
  }
  return repetition;
};

let numbers = [1, 1, 1, 5, 5, 10, 9];
console.log(countRepetition(numbers));

module.exports = countRepetition