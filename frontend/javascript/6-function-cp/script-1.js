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
