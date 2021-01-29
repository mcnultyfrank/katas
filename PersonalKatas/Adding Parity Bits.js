// Adding Parity Bits

// Parity bits are used as a very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:
// If a binary string has an odd number of 1's, the parity bit is a 1.
// If a binary string has an even number of 1's, the parity bit is a 0.
// The parity bit is appended to the end of the binary string.
// Create a function that adds the correct parity bit to a binary string.
// Worked Example
// addParityBit("1011011") ➞ "10110111"
// // There are five 1's.
// // Since five is odd, the parity bit should be a 1.
// // Add the parity bit to the end of the string.
// // Return the result.
// Examples
// addParityBit("0010110") ➞ "00101101"
// addParityBit("1100000") ➞ "11000000"
// addParityBit("1111111") ➞ "11111111"

    const addParityBit = (bitString) => {
        const ones = [];
        splitString = bitString.split('');
        for (let i = 0; i < splitString.length; i++) {
            if (splitString[i] === '1'){
                ones.push(parseInt(splitString[i]))
            }
        }
        ones.length%2 == 0 ? splitString.push('0') : splitString.push('1');
        console.log(splitString.join(''));
        return splitString.join('');
    }

    addParityBit('0010110');

    module.exports = addParityBit;
