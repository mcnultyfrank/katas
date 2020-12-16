const reverseStringFunction = require('./script.js');

test('does the string reverse', () => {
    expect(reverseStringFunction('frank')).toBe('knarf');
    expect(reverseStringFunction('hello')).toBe('olleh');
});