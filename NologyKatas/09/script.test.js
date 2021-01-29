const isItAnagram = require('./script.js');

test('are the two inputted strings anagrams of each other?', () => {
  expect(isItAnagram('dusty', 'study')).toBe(true)
  expect(isItAnagram('tar', 'rat')).toBe(true)
  expect(isItAnagram('dog', 'cat')).toBe(false)
});