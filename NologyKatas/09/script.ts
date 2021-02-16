
// 09. How do you check if two strings are anagrams of each other?
let isItAnagram = (firstword: string, secondword: string) => {
    if (firstword.split("").sort().join("") === secondword.split("").sort().join("")){
        return true
    } else {
        return false
    }
};

isItAnagram('dusty', 'study')

module.exports = isItAnagram;



