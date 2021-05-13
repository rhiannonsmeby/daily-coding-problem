// word compression
// k consecutive equal characters and removing them
// input: abbcccb, k = 3
// output: abbbb, removed the 3 consecutive c's

function wordComp(str, k) {
    // loop through the string
    let ar = str.split('')
    let start;
    let counter = 1;
        for (let i = 0; i < ar.length; i++) {
            //keep track of which letter (i) you're currently on
            //if i == i + 1, add one to the counter, keep track of which letter i you're
            //currently on
            if (ar[i] !== ar[i - 1]) {
                start = ar[i];
            }
            
            for (let j = 1; j < ar.length; j++) {
              
                if (ar[i] === ar[j]) {
                    counter ++;
                }
                if (ar[i] !== ar[j]) {
                    counter = 1;
                }
            }
            if (counter === k) {
                ar.splice(start, k);
            }
            
        }
        return ar.join('')
}
console.log(wordComp('abbcccb', 3)) // abbbb
console.log(wordComp('baac', 2)) //bc
console.log(wordComp('abbcccb', 3)) //a

function compressWord(word, k) {
    // Write your code here
    let ar = word.split('')
    let start;
    let end;
    let counter = 1;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] !== ar[i - 1]) {
            start = i;
        }
        if (ar[i] === (ar[i + 1])) {
            counter++
            console.log(counter)
        }
        if (counter == k) {
            end = i;
            ar.splice(start, k)
        }
    }
    return ar.join('')
}

// max path sum
// puzzle using a rectangular grid. the upper left corner is at (row, column) = (0,0)
// each cell contains an integer
// the score starts at 0 and is the sum of all the integers in each cell
//visited as the grid is traversed
// move up, down, or diagonally as long as you stay within the bounds of the grif.
// only one cell can be visited per row,
// given a starting point (0, p) in the top row and a starting point (rows - 1, q) in
// the bottom row, determine the better score acchievable
// board [[1,2,3],[4,5,6],[7,8,9]]
// p = 1
// q = 0

//easier

//not very efficient
// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let count = 1;
//     while (count) {
//         if (!A.includes(count)) {
//             return count;
//         } else {
//             count++
//         }
//     }
// }

function solution(A) {
    var min = 1;
    A.sort(function(a,b){
       // Sort the array explicit way
       return a - b; 
    });

    for (var i in A) {
        if (A[i] > -1 && A[i] == min) {
                min++;
        }
    }

    return min;
}

console.log(solution([1,2,3,4])) //5
console.log(solution([-1,-2,-3,-4])) //1
console.log(Number(45).toString(2))
// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// 86% of tests, not passing edge cases where long string of 0s doesn't end in 1
function solutionBinary(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let binaryN = Number(N).toString(2);

    if (!binaryN.slice(1).includes('1')) {
        return 0;
    }

    let ar = binaryN.split('1');
    let long = 0;

    for (let i = 0; i < ar.length; i++) {
        if (ar[i].length > long) {
            long = ar[i].length
        }
    }
    return long
}
