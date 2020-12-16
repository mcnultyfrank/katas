const isItAnagramFunction = require('./script.js');

test('print duplicate string', () => {
  expect(isItAnagramFunction('dusty', 'study')).toBe(true);
  expect(isItAnagramFunction('tar', 'rat')).toBe(true);
  expect(isItAnagramFunction('dog', 'cat')).toBe(false);
});