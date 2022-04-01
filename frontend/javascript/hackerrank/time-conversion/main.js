// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  // Write your code here
  // TODO: answer here
  let clock = s.split(':');
  clock[2] = s.slice(6,8);
  if(s[8]==='A'){
    if(clock[0] === '12'){
      clock[0] = '00';
    }
  }else{
    if(parseInt(clock[0]) < 12){
      clock[0] = parseInt(clock[0]);
      clock[0] += 12;
    }
  }
  return (clock[0]+":"+clock[1]+":"+clock[2]);
}

function main() {
  //var s = readLine();
  var s = '07:05:45PM'; // override input
  var result = timeConversion(s);
  console.log(result);

}

main(); // execute program

module.exports = timeConversion