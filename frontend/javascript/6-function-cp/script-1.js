// Mengembalikan teks yang berkebalikan
//
// contoh: 
// teks = hello world
// hasil:
// dlrow olleh

function reverseString(str) {
    // TODO: answer here
    newArray = [];
    for (let i = str.length - 1; i >= 0; i--) {
        newArray.push(str[i]);
    }
    console.log(newArray.join(''));
    return;
}

// take input from the user
const string = "kasur";

const result = reverseString(string);


// Or

// function reverseString(str) {
//     // TODO: answer here
//     console.log(str.split('').reverse().join(''));
// }

// // take input from the user
// const string = prompt('Masukan teks: ');

// const result = reverseString(string);
// console.log(result);

// split = memecah string menjadi array
// reverse = membalik urutan array
// join = menggabungkan array menjadi string