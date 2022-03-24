// Mengembalikan boolean untuk mengecek apakah teks palindrom
//
// contoh: 
// teks1 = hello
// teks2 = madam
// teks3 = kasur ini rusak
// hasil:
// teks1 dibalik menjadi olleh, maka balikan akan false
// teks2 dibalik sama menjadi madam, maka balikan akan true
// teks3 dibalik sama menjadi kasur ini rusak, maka balikan akan true

function checkPalindrome(string) {
    // TODO: answer here
    newArray = [];
    for (let i = string.length - 1; i >= 0; i--) {
        newArray.push(string[i]);
    }
    if (string === newArray.join('')) {
        console.log(string + " = " + newArray.join(''));
        return true;
    } else {
        console.log(string + " != " + newArray.join(''));
        return false;
    }
    
}

// masukan teks
const string = "madam";

// memanggil fungsi palindrom
const value = checkPalindrome(string);
console.log(value);