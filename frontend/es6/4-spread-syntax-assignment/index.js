/**
 * Buatlah sebuah fungsi yang menerima dua argumen berupa objek kemudian mengembalikan menjadi satu objek gabungan
 *
 * Contoh: {a: 1, b: 2}, {c: 3, d: 4}
 * Output: {a: 1, b: 2, c: 3, d: 4}
 */

const mergeTwoObjects = (firstObject, secondObject) => {
  // TODO: answer here
  const merge = { ...firstObject, ...secondObject };
  return merge;
};

let firstObject = { a: 1, b: 2 };
let secondObject = { c: 3, d: 4 };
console.log(mergeTwoObjects(firstObject, secondObject));

module.exports = mergeTwoObjects