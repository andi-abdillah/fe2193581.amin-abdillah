// Sort array terlebih dahulu, kemudian rotasi ke kiri sesuai dengan nilai yang telah ditentukan.
//
// Contoh Sort array:
// Input: [4,5,2,1,3]
// Output: [1,2,3,4,5]

//Contoh RotateLeft:
//Input: 4, [1,2,3,4,5]
//Output: [5,1,2,3,4]

// Explanation RotateLeft:
// untuk melakukan rotasi kiri dengan nilai 4, array mengalami urutan perubahan berikut:
// [1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2] -> [4,5,1,2,3] -> [5,1,2,3,4]

function sort(arr) {
    return arr.sort(function(a,b){
        return a-b;
    })
}

function rotateLeft(d, arr) {
    // console.log(arr.concat(arr))
    let sorted = sort(arr);
    return rotated = sorted.slice(d).concat(sorted.splice(0,d));
}

let nums = [4, 5, 2, 1, 3];
let sorted = sort(nums);
console.log(sorted);
rotated = rotateLeft(4, sorted);
console.log(rotated);

module.exports = { sort, rotateLeft }