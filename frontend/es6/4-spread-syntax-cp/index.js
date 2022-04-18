/**
 * Buatlah sebuah fungsi yang menerima berapapun jumlah argumen dalam bentuk angka, kemudian mengembalikan nilai maksimal dari semua angka tersebut.
 *
 * max(1, 2, 3, 4, 12, 3, 4) output: 12
 * max(1, 2, 5) output: 5
 * max(1) output: 1
 *
 * Dilarang menggunakan Math.max
 */
const max = (...args) => {
  // TODO: answer here
  const maxValue = args.reduce((prevValue, currentValue)=> {
    if(prevValue > currentValue){
      return prevValue;
    }else{
      return currentValue;
    }
  });
  return maxValue;
};

let input = [1, 2, 3, 4, 12, 3, 4];
console.log(max(...input));

module.exports = max