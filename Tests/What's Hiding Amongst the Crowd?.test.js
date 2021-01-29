const findWord = require("../PersonalKatas/What's Hiding Amongst the Crowd?");

test('only lowercase letters will be returned', () => {
    expect(findWord('bEEFGBuFBRrHgUHlNFYaYr')).toBe('burglar');
    expect(findWord('YFemHUFBbezFBYzFBYLleGBYEFGBMENTment')).toBe('embezzlement');
});

