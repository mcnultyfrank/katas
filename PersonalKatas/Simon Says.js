// Simon Says
// Create a function that takes in two arrays and returns true if the second array follows the first array by one element, 
// and false otherwise. In other words, determine if the second array is the first array shifted to the right by 1.




    const simonSays = (firstArray, secondArray) => {
        const firstValue = firstArray[firstArray.length - 2];
        const secondValue = secondArray[secondArray.length - 1];
        firstValue === secondValue ? console.log(true) : console.log(false);
    }

    simonSays([1, 2], [5, 1])