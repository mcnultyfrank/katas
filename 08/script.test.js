const duplicateStringFunction = require('./script.js');

test('print duplicate string', () => {
  expect(duplicateStringFunction('hello')).toBe('ll');
  expect(duplicateStringFunction('hello there, you look unsettled. Try this apple')).toBe('ll', 'oo','tt','pp');

});