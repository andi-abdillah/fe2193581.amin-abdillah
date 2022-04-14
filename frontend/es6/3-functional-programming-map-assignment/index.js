/**
 * Keluarkan rata-rata dari semua murid yang ada.
 *
 * Contoh
 *  input: [
 *  {
 *      name: "Yono",
 *      nilai: [6, 8, 7, 7, 5, 5]
 *  },
 *  {
 *      name: "Dodi",
 *      nilai: [9, 6, 5, 10, 8, 6]
 *  },
 *  {
 *      name: 'Dori',
 *      nilai: [4, 5, 6, 3, 5, 6]
 *  }
 * ]
 *
 *  output: [{ name: "Yono", rataNilai: 6}, { name: "Dodi", rataNilai: 7}, { name: "Dori", rataNilai: 6}]
 *
 * Hint: gunakan Math.round() untuk membulatkan nilai rata-rata.
 */

const returnUserAverageScore = (students) => {
  // TODO: answer here
  let result = [];
  for(let i=0; i<students.length; i++){
    let mean = 0;
    for(let j=0; j<students[i].nilai.length; j++){
      mean += students[i].nilai[j];
    }
    mean = Math.round(mean/students[i].nilai.length);
    result.push({name: students[i].name,  rataNilai: mean});
  }
  return result;
};

let students = [
  {
    name: "Yono",
    nilai: [6, 8, 7, 7, 5, 5],
  },
  {
    name: "Dodi",
    nilai: [9, 6, 5, 10, 8, 6],
  },
  {
    name: "Dori",
    nilai: [6, 8, 7, 3, 5, 5],
  },
]
console.log(returnUserAverageScore(students))

module.exports = returnUserAverageScore