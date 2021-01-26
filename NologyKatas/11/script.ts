// 11. How do you check if a given string is a palindrome?

let isItAPalmindrome = (stringParameter: string) => stringParameter === stringParameter.split("").reverse().join("") ? true : false;

isItAPalmindrome('kayak');

module.exports = isItAPalmindrome;

