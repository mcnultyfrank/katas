// Reverse the Odd Length Words
// Given a string, reverse all the words which have odd length. The even length words are not changed.

    const reverseOdd = (string) => {
        const noSpaces = string.split(" ");
        const completedString = [];
        for (let i = 0; i < noSpaces.length; i++) {            
            const splitEachWord = noSpaces[i].split("");
            splitEachWord.length % 2 !== 0 ? splitEachWord.reverse() : null;
            completedString.push(splitEachWord.join(""));
        }
        return console.log(completedString.join(" ")); 
    }

    reverseOdd("Make sure uoy only esrever sdrow of ddo length")