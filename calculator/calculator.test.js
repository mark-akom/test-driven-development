import calulator from './calculator';

test('add two numbers', () => {
    expect(calulator.add(8, 9)).toBe(17);
    expect(calulator.add(9, 9)).toBe(18);
    expect(calulator.add(0, 9)).toBe(9);
});

test('subtract two numbers', () => {
    expect(calulator.subtract(9, 2)).toBe(7);
    expect(calulator.subtract(5, 2)).toBe(3);
    expect(calulator.subtract(8, 1)).toBe(7);
});

test('multiply two numbers', () => {
    expect(calulator.multiply(2, 2)).toBe(4);
    expect(calulator.multiply(3, 2)).toBe(6);
    expect(calulator.multiply(3, 3)).toBe(9);
});

test('divide two numbers', () => {
    expect(calulator.divide(4, 2)).toBe(2);
    expect(calulator.divide(8, 2)).toBe(4);
    expect(calulator.divide(16, 2)).toBe(8);
})