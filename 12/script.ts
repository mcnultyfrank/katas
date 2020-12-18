
// 12. How can a given string be reversed using recursion?

const recursionReverse = (stringParameter: string) => {
    for (let i = stringParameter.length - 1; i >= 0; i--) {
        console.log(stringParameter[i]);
    }
}
recursionReverse('The existence of the length property')

export = {};

