// Staircase
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  // Write your code here
  // TODO: answer here
  let line = '';
  for(let i=0; i<n; i++){
  	for(let j=n-1; j>i; j--){
    	line += ' ';
    }
    for(let k=0; k<=i; k++){
    	line += '#';
    }
    line += '\n';
  }
  return line;
}

function main() {
  const n = 6

  let result = staircase(n);
  console.log(result)
}

main(); // execute program

module.exports = staircase