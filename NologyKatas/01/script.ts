// 01. How do you find the missing numbers in a given integer array?
// incomplete 

let integerArray: number [];
integerArray = [1, 4, 9, 2, 6, 7, 10, 3, 8];

let sortedArray: number [];
sortedArray = integerArray.sort((a,b) => a - b);
console.log(sortedArray);

let arrayLength: number = integerArray.length;
console.log(arrayLength);

