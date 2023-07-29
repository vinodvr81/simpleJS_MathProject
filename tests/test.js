// Test Suite for the Calculator Functions
describe('Calculator Functions', function () {
    // Test for the addition function
    it('should return the correct sum of two numbers', function () {
        expect(add(3, 5)).toBe(8);
        expect(add(-2, 7)).toBe(5);
        expect(add(0, 0)).toBe(0);
    });

    // Test for the subtraction function
    it('should return the correct difference of two numbers', function () {
        expect(subtract(10, 5)).toBe(5);
        expect(subtract(3, 7)).toBe(-4);
        expect(subtract(0, 0)).toBe(0);
    });

    // Test for the multiplication function
    it('should return the correct product of two numbers', function () {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-4, 5)).toBe(-20);
        expect(multiply(0, 10)).toBe(0);
    });
    // Unittest for the Division function
    it('should return the correct division of two numbers', function () {
        expect(division(4, 2)).toBe(2);
        expect(division(8, 3)).toBe(2.6666666666666665);
        expect(division(10, 3)).toBe(3.3333333333333335);
    });
});

jasmine.getEnv().execute();