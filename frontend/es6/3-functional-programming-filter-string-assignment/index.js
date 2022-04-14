/**
 * Ambil semua element yang bukan angka dalam array
 * Contoh
 *  input: [s, df, g, 9, 10, 1D1, 27]
 *  output: [s, df, g, 1D1]
 *
 */

const filterString = (array) => {
  // TODO: answer here
  let notNum = [];
  for(let i=0; i<array.length; i++){
    if(typeof(array[i]) !== 'number'){
      notNum.push(array[i]);
    }
  }
  return notNum;
};
let array = ["s", "df", "g", 9, 10, "1D1", 27];
console.log(filterString(array));

module.exports = filterString