const recursionReverse = require('./script.js');


test('does the string reverse using recursion?'), () => {
    expect(recursionReverse('hello there').toBe('ereht olleh'))
    expect(recursionReverse('frank').toBe('knarf'))
}
