// Menggunakan switch case, petakan nilai ujian di bawah ini ke dalam Nilai A B C D E
// A = 91-100
// B = 71-90
// C = 61-70
// D = 51-60
// E = <= 50

// Masukan suatu angka
const score = 50;

// TODO: answer here
let nilai;
switch(true) {
    case score>90:
        nilai = "Anda mendapat nilai A";
      break;
    case score>70:
        nilai = "Anda mendapat nilai B";
      break;
    case score>60:
        nilai = "Anda mendapat nilai C";
      break;
    case score>50:
        nilai = "Anda mendapat nilai D";
      break;
    case score<=50:
        nilai = "Anda mendapat nilai E";
      break;
}
console.log(nilai);
