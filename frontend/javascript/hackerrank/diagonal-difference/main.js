// Diagonal Difference
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
* Complete the 'diagonalDifference' function below.
*
* The function is expected to return an INTEGER.
* The function accepts 2D_INTEGER_ARRAY arr as parameter.
*/

// Full Problem: https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  // Write your code here
  // TODO: answer here
  let a = 0;
  let b = 0;
  for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr.length; j++){
          if(i===j){
          a += arr[i][j];
          }
          if(i+j===arr.length-1){
              b += arr[i][j];
          }
      }
  }
  return Math.abs(a-b);
}

function main() {
  //var n = parseInt(readLine());
  var a = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ]; // override input
  let result = diagonalDifference(a);
  console.log(result);
}

main(); // execute program

module.exports = diagonalDifference