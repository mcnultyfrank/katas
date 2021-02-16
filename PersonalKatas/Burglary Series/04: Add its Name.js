// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— 
// return an object with that name and value in it (as key-value pairs).
//addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }


const addName = (object, key, value) => {
    const item = {
        [key]: value,
    }
    return {...object, ...item}
}

addName({ piano: 500 }, "Brutus", 400) 
module.exports = addName;
