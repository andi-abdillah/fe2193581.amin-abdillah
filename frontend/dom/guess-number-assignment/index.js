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
let randomNumber = Math.floor(Math.random() * 10) + 1;
let input = document.querySelector('.input');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let number = document.querySelector('.number');

function displayMessage(msg) {
  // TODO: answer here
  message.innerHTML = msg;
}


score.innerHTML = 10;

document.querySelector('.new-game').addEventListener('click', resetGame);
document.querySelector('.check').addEventListener('click', checkNumber);

function resetGame() {
  // TODO: answer here
  //dilarang menghapus code dibawah ini!
  number.innerHTML = "?";
  randomNumber = Math.floor(Math.random() * 10) + 1;
  input.value = '';
  message.innerHTML = 'Lets start guessing...';
  score.innerHTML = 10;
}

function checkNumber() {
  // TODO: answer here
  if(score.innerHTML>0){
    if(message.innerHTML != 'Yeay! You guessed the correct number!'){
      if(input.value === '' || input.value <= 0 || input.value > 10) {
        displayMessage('Guess any number between 1 and 10');
      } else if(input.value == randomNumber) {
        displayMessage('Yeay! You guessed the correct number!');
        number.innerHTML = randomNumber;
      } else if(input.value > randomNumber) {
        displayMessage("Oww... that's too big!");
        score.innerHTML--;
      } else if(input.value < randomNumber) {
        displayMessage('Too small, buddy!');
        score.innerHTML--;
      }
    }
  }if(score.innerHTML == 0) {
    displayMessage('Game Over!');
  }
}

//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber