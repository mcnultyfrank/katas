// 07. How do you reverse the words in a sentence?

const reverseStringFunction = (sentence: string) => {
    let reversedSentence = sentence.split("").reverse().join("");
    console.log(reversedSentence);
    
    return reversedSentence;
}
reverseStringFunction('frank')

module.exports = reverseStringFunction;


 
