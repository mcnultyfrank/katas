const isItAPalmindrome = require('./script.js');

test('is the inputted string a palindrome'), () => {
    expect(isItAPalmindrome('11').toBe(true))
    expect(isItAPalmindrome('frank'). toBe(false))
    expect(isItAPalmindrome('Kayak'). toBe(true))
}