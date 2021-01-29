
// 12. How can a given string be reversed using recursion?

let stringArray: String [] = []; 

const recursionReverse = (stringParameter: string) => {
    for (let i = stringParameter.length - 1; i >= 0; i--) {
        stringArray.push(stringParameter[i])
    }    
    console.log(stringArray.join(""));
    
    return ;

}  

recursionReverse('hello there');  

module.exports = recursionReverse;


