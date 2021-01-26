
// 12. How can a given string be reversed using recursion?

let stringArray: any []; 
stringArray = [];

const recursionReverse = (stringParameter: string) => {
    for (let i = stringParameter.length - 1; i >= 0; i--) {
        stringArray.push(stringParameter[i])
    }
    console.log(stringArray.join(''));
    return stringArray.join('')
    
}  

recursionReverse('hello there');  


module.exports = recursionReverse;

