// Numbers in Strings
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

const arrayUnique = require("array-unique")
// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

    const numInStr = (array) => {
        console.log(array.forEach(element => {
            console.log(element);
        }));
    }

    numInStr(["1a", "a", "2b", "b"])
