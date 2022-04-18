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
  const averageScore = students.map(item => {
    const averageScore = {};
    const sum = item.nilai.reduce((prevValue, currentValue) => {
      return prevValue + currentValue;
    });
    averageScore.name = item.name;
    averageScore.rataNilai = Math.round(sum / item.nilai.length);
    return averageScore;
  });
  return averageScore;
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