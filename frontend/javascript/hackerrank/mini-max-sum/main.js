// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  // Write your code here
  // TODO: answer here
  let result = [];
    for(let i=0; i<arr.length; i++){
        let sum = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[j]!==arr[i]){
                sum += arr[j];
            }
        }
        result.push(sum);
    }
    let min = Math.min(...result);
    let max = Math.max(...result);
    console.log(min +" "+ max);
    return (min +" "+ max);
}

function main() {
  //arr = readLine().split(' ');
  //arr = arr.map(Number);
  var arr = [1, 2, 3, 4, 5]; // override input
  let result = miniMaxSum(arr);
  console.log(result)
}

main(); // execute program

module.exports = miniMaxSum