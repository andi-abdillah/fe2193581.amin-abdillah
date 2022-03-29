// Dalam suatu tambang emas ukuran m x n (2d array), setiap petak di tambang ini memiliki bilangan bulat yang mewakili jumlah emas di petak itu, 0 jika kosong.
// Kembalikan jumlah maksimum emas yang dapat dikumpulkan dengan ketentuan:
// 1. Setiap kali berada di petak, kamu akan mengumpulkan semua emas di petak itu.
// 2. Dari posisi sekarang, kamu bisa berjalan satu langkah ke kiri, kanan, atas, atau bawah.
// 3. Kamu tidak dapat mengunjungi petak yang sama lebih dari sekali.
// 4. Jangan pernah mengunjungi petak dengan 0 emas.
// 5. Kamu dapat memulai dan berhenti mengumpulkan emas dari posisi mana pun di petak yang memiliki emas.
//
// Contoh 1
// Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
// Output: 24
// Explanation:
// 0 6 0
// 5 8 7
// 0 9 0
// Jalan untuk mendapatkan emas maksimal, 9 -> 8 -> 7.
//
// Contoh 2
// Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
// Output: 28
// Explanation:
// 1  0  7
// 2  0  6
// 3  4  5
// 0  3  0
// 9  0 20
// Jalan untuk mendapatkan emas maksimal, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.

function getMaximumGold(grid) {
    // TODO: answer here
    var maxSum = 0;
    var visited = [];
    var row = grid.length;
    var col = grid[0].length;
    var dfs = function(i, j, sum) {
        if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === 0 || visited[i][j]) {
            return;
        }
        visited[i][j] = true;
        sum += grid[i][j];
        maxSum = Math.max(maxSum, sum);
        dfs(i-1, j, sum);
        dfs(i+1, j, sum);
        dfs(i, j-1, sum);
        dfs(i, j+1, sum);
        visited[i][j] = false;
    }
    for (var i=0; i<row; i++) {
        visited[i] = [];
        for (var j=0; j<col; j++) {
            visited[i][j] = false;
        }
    }
    for (var i=0; i<row; i++) {
        for (var j=0; j<col; j++) {
            dfs(i, j, 0);
        }
    }
    return maxSum;
};

// TODO: answer here
grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]];
console.log(getMaximumGold(grid));

module.exports = getMaximumGold