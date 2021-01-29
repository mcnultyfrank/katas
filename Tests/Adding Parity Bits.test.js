const addParityBit = require("../PersonalKatas/Adding Parity Bits.js");
const { expect } = require("@jest/globals");

    test("If a binary string has an odd number of 1's, the parity bit is a 1", () => {
        expect(addParityBit("0010110")).toBe("00101101");
    })
    test("If a binary string has an even number of 1's, the parity bit is a 0", () => {
        expect(addParityBit("1100000")).toBe("11000000");
    })