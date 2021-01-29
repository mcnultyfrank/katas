/// What's Hiding Amongst the Crowd?
// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// Examples
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

const findWord = (str) => {
    const splitword = str.split('');
    const returnArray = [];
    for (let i = 0; i < splitword.length; i++) {
        if (splitword[i] !== splitword[i].toUpperCase()){
            returnArray.push(splitword[i]);
        }        
    }
    
    return returnArray.join("");

}
findWord('bEEFGBuFBRrHgUHlNFYaYr');

    module.exports = findWord;
