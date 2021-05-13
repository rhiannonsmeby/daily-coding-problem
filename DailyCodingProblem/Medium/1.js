// Day 3
// Asked by: Google
// Given the root of a binary tree, implement serialize(root), which serializes
// the tree into a string, and deserialize(s), which deserializes the string
// back into the tree

//reverse the words in a string
// 'how are you'
//'you are how'
function reverseString(str) {
    let ar = str.split(' ')
    console.log(ar)
    let word;
    let result = [];
    for (let i = 0; i < ar.length; i) {
        word = ar.pop()
        console.log(word)
        result.push(word)
    }
    return result.join(' ');
}

console.log(reverseString('How are you'));
