/**
 * Tampilkan pasang huruf besar dari semua huruf kecil yang ada pada array
 
 * Contoh 
 *  input: ['a', 'b', 'c', 'd']
 *  output: [ {'a': 'A'}, {'b': 'B'}, {'D': 'c'}, {'d': 'D'}]
 * 
 */

const lowerToUpperMap = (array) => {
  // TODO: answer here
  let result = [];
  for(let i=0; i<array.length; i++){
    result.push({[array[i]]: array[i].toUpperCase()});
  }
  return result;
};
let input = ['a', 'b', 'c', 'd'];
console.log(lowerToUpperMap(input));
module.exports = lowerToUpperMap
