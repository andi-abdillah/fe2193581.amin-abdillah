/**
 * Carilah angka palindrome yang LEBIH BESAR dan TERDEKAT dari angka-angka dibawah ini
 * 
 * Misal:
 * - Jika angka pada parameter bernilai 90 maka angka palindrome terdekat adalah 99
 * - Jika angka pada parameter bernilai 102 maka angka palindrome terdekat adalah 111
 */

function angkaPalindrome(num) {
  // TODO: answer here
  if(num < 10){
    num = 10;
  }
  let palindrome = 0;
  for(let i=num; i>=num; i++){
    let reverse = i.toString().split('').reverse().join('');
    reverse = parseInt(reverse);
    if(i === reverse){
      palindrome = i;
      break;
    }
    // console.log(typeof(reverse));
  }
  // console.log(typeof(palindrome));
  return palindrome;
}

console.log(angkaPalindrome(6)); //11
console.log(angkaPalindrome(17)); //22
console.log(angkaPalindrome(175)); //181

module.exports = angkaPalindrome