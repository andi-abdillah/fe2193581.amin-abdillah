// Diberikan matriks n x n 2D yang ada di bawah, putar matriks 90 derajat (searah jarum jam).
// Kita harus memutar matriks tersebut, yang berarti harus mengubah input matriks 2D secara langsung. 
// Jangan mengalokasikan matriks 2D lain dan melakukan rotasi, dan matriks harus berbentuk array 2 dimensi.
//
// Contoh 1
//
// 1 2 3     7 4 1
// 4 5 6 --> 8 5 2
// 7 8 9     9 6 3
//
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
//
// Contoh 2
//
//  5  1  9 11        15 13  2  5
//  2  4  8 10  --->  14  3  4  1
// 13  3  6  7  --->  12  6  8  9
// 15 14 12 16        16  7 10 11
//
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]


var matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];

function rotation(matrix) {
    var n = matrix.length; 
    for (var i=0; i<n/2; i++) {
        for (var j=i; j<n-i-1; j++) {
            var temp = matrix[i][j];
            matrix[i][j]= matrix[n-j-1][i];
            matrix[n-j-1][i]= matrix[n-i-1][n-j-1];
            matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
            matrix[j][n-i-1] = temp;
        }
    }
    return matrix;
}
console.log(rotation(matrix));

module.exports = rotation