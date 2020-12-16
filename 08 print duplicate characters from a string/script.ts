// 08. How do you print duplicate characters from a string?

let sentence: string;
sentence = 'hello there, you look settled. Try this apple.'
const splitSentence = sentence.split("")
console.log(splitSentence);

for (let i = 0; i < splitSentence.length; i++) {
    splitSentence[i] === splitSentence[i + 1] ? console.log(splitSentence[i], splitSentence[i + 1]) : null;
}

