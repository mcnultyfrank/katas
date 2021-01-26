// How do you print the first non-repeated character from a string?

// incomplete

let firstNonRepeatedCharacter = (stringParameter: string) => {
    for (let i = 0; i < stringParameter.length; i++) {
        if (stringParameter.split("")[i] !== stringParameter.split("")[i + 1] && stringParameter.split("")[i] !== stringParameter.split("")[i - 1]){
            console.log('first non repeat', [i]);            
            return [i.valueOf];
        }
        else {
            continue
        }
    }    
}

firstNonRepeatedCharacter('');

module.exports = firstNonRepeatedCharacter;
