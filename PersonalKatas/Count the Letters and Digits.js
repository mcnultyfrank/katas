// Count the Letters and Digits
// Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.
// Examples
// countAll("Hello World") ➞ { "LETTERS":  10, "DIGITS": 0 }

// countAll("H3ll0 Wor1d") ➞ { "LETTERS":  7, "DIGITS": 3 }
// countAll("149990") ➞ { "LETTERS": 0, "DIGITS": 6 }
// Notes
// Tests contain only alphanumeric characters.
// Spaces are not letters.
// All tests contain valid strings.

    const countAll = (word) => {
        const splitWord = word.toString().split("");
        const strings = [];
        const numbers = [];
        for (let i = 0; i < splitWord.length; i++) {
            if(isNaN(splitWord[i]) === true)
            strings.push(splitWord[i])   
            else if (isNaN(splitWord[i]) !== true && splitWord[i] !== " ") {
                numbers.push(splitWord[i])
            }
        }
        const returnObject = {
            "LETTERS" : strings.length,
            "DIGITS" : numbers.length
        }
        return returnObject;
        

    }
    module.exports = countAll;

countAll("149990")