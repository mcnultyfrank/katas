// 02. How do you find the duplicate number on a given integer array?


let arrayExample: Array<number>;
arrayExample = [1, 2, 3, 4, 5, 6, 5, 9, 1]

let sortedArray = arrayExample.sort((a, b) => a - b);

for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]){
        console.log(sortedArray[i], sortedArray[i + 1]);        
    }
    else {
        continue
    }
}



export = {}