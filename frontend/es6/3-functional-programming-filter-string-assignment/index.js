/**
 * Ambil semua element yang bukan angka dalam array
 * Contoh
 *  input: [s, df, g, 9, 10, 1D1, 27]
 *  output: [s, df, g, 1D1]
 *
 */

const filterString = (array) => {
  // TODO: answer here
  const filterString = array.filter(item => {
    if(typeof item === 'string'){
      return item;
    }
  });
  return filterString;
};
let array = ["s", "df", "g", 9, 10, "1D1", 27];
console.log(filterString(array));

module.exports = filterString