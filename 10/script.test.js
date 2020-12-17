var firstNonRepeatedCharacter = require('./script.js')

test("print the first non-repeated character from a string", () => {
    expect(firstNonRepeatedCharacter('frank').toBe('f'))
    expect(firstNonRepeatedCharacter('llama').toBe('m'))
    expect(firstNonRepeatedCharacter('animals').toBe('n'))
})
