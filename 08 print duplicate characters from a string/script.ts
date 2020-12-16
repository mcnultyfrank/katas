// 08. How do you print duplicate characters from a string?

const duplicateStringFunction = (sentence: string) => {
    for (let i = 0; i < sentence.length; i++) {
        if(sentence[i] === sentence[i + 1]){
            return sentence[i] + sentence[i + 1]
        }
    }    
}
duplicateStringFunction('hello there, you look unsettled. Try this apple')

module.exports = duplicateStringFunction;
