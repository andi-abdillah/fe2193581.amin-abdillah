/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let newGameBtn = tombol untuk melakukan restart game
// let randomNumber = generate random number dari 1 sampai 10
// let message = element untuk menampilkan pesan
// let displayScore = element untuk menampilkan score
// let input = element untuk memasukan data
// let checkBtn = tombol untuk melakuan pengecekan angka pada input
// let score = nilai yang akan ditampilakan

// TODO: answer here
let randomNumber = document.getElementById('hidden-number');
let inputNumber = document.getElementsByClassName('input');
let message = document.getElementsByClassName('message');
let score = document.getElementsByClassName('score');

function displayMessage(msg) {
  // TODO: answer here
  message.innerHTML = msg;
}

document.getElementById('myBtn').addEventListener('click', function () {
  myFunction(p1, p2);
});

function resetGame() {
  // TODO: answer here
  //dilarang menghapus code dibawah ini!
  document.getElementById('hidden-number').innerHTML = randomNumber;
  document.getElementsByClassName('input').innerHTML = '';
  document.getElementsByClassName('message').innerHTML = '';
  document.getElementsByClassName('score').innerHTML = '';
}

function checkNumber() {
  // TODO: answer here
  if(inputNumber.value < 0 || inputNumber.value > 10) {
    displayMessage('Input number must be between 0 and 10');
  }else if(inputNumber.value == randomNumber) {
    displayMessage('You Win!');
  } else if(inputNumber.value > randomNumber) {
    displayMessage('Too High!');
  } else if(inputNumber.value < randomNumber) {
    displayMessage('Too Low!');
  }
}

//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber