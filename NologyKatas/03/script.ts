// 03. How do you find duplicate numbers in an array if it contains multiple duplicates?



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