const countAll = require("../PersonalKatas/Count the Letters and Digits.js");

    test("do the arrays have the correct types" , () => {
        expect(countAll(149990)).toStrictEqual({ "LETTERS": 0, "DIGITS": 6 });
        expect(countAll("H3ll0 Wor1d")).toStrictEqual({ "LETTERS":  7, "DIGITS": 3 });
    })