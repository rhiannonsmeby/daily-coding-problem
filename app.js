// Daily Coding Problems

// Day 1
// Asked by: Google
// [Easy]
// Given a list of numbers and a number k, return whether any two numbers from
// the list add up to k
// Input: [10, 15, 3, 7] and 17
// Output: true (since 10 + 7 is 17)
// can you do this in one pass? O(n)

// attempt #1 with an array
//O(n^2)
function addNumsAr(ar, k) {
    // loop over the array, adding the numbers to each other
    for (let i = 0; i < ar.length; i++) {
        for (let j = 1; j < ar.length; j++) {
            if (ar[i] + ar[j] === k) {
                return true
            }
        }
    }
    return false
}

console.log(addNumsAr([10, 15, 3, 7], 17)) // true

// attempt #2 
// O(n^2) again bc of how .includes works
function addNums1(ar, k) {
    //use a set to remember the numbers we've seen so far
    let set = [];
    //loop through the array
    for (let i =0; i < ar.length; i++) {
        // if the set includes a number that equals the difference between k and
        //the current number, return true
        if (set.includes(k - ar[i])) {
            return true
        }
        //add current num to the set 
        set.push(ar[i])
    }
    //if the if statement in the for loop is never true, return false
    return false
}

console.log(addNums1([10, 15, 3, 7], 17)) // true


// Day 2
// Asked by: Uber
// [Easy]
// Given an array of integers, return a new array such that each element
// at index i of the new array is the product of all the numbers in the 
// original array except the one at i
// Input: [1, 2, 3, 4, 5]
// Output: [120, 60, 40, 30, 24]

// attempt #1 with division
// O(n)
function productMinus(ar) {
    // determine the total product
    let totalProduct = 1;
    let result = [];
    for (let i = 0; i < ar.length; i++) {
        totalProduct *= ar[i]
    }
    // for each element in the array push the totalProduct divided by the
    // element value to a results array
    ar.forEach(element => {
      result.push(totalProduct / element)  
    });
    //return the result
    return result;
}

console.log(productMinus([1, 2, 3, 4, 5])) // [120, 60, 40, 30, 24]

// attempt #2 without division
// O(n^2)
function productMinusNoDiv(ar) {
    let result = [];
    let answer = [];
    // loop through the array and 
    for (let i = 0; i < ar.length; i++) {
       result = ar.filter(function(value) {
           return value !== ar[i]
       })
       let index = 1;
       for (let j = 0; j < result.length; j++) {
         index *= result[j]
       }
       answer.push(index)
    }
    return answer
}

console.log(productMinusNoDiv([1, 2, 3, 4, 5])) // [120, 60, 40, 30, 24]

// attempt #3 no div and better time complexity
function productMinus2(ar) {
    //the ith element needs the product of numbers before i and the product of
    //numbers after i... then we could multiply those two numbers together to 
    //get our desired product
    let prefixProducts = [];
    for (let i = 0; i < ar.length; i++) {
        
    }
}

console.log(productMinus2([1, 2, 3, 4, 5])) // [120, 60, 40, 30, 24]

// Day 3
// Asked by: Google
// [Medium]
// Given the root of a binary tree, implement serialize(root), which serializes
// the tree into a string, and deserialize(s), which deserializes the string
// back into the tree


// Day 4
// Asked by: Stripe
// [Hard]
// Given an array of integers, find the first missing positive integer in linear
// time and constant space. Find the lowest positive interger that does not 
// exist in the array. The array can contain duplicates and negative numbers as
// well.
// Input: [3, 4, -1, 1]
// Output: 2
// Input: [1, 2, 0]
// Output: 3
