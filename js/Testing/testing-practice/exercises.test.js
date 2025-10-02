import { capitalize, reverseString, calculator } from './exercises';

test('capitalize test', () => {
    expect(capitalize('test')).toBe('Test');
});

test('reverse string hello world!', () => {
    expect(reverseString('Hello World!')).toBe('!dlroW olleH');
});

test('calculator add 1 + 2', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('calculator subtract 5 - 3', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test('calculator multiply  7 * 3', () => {
    expect(calculator.multiply(7, 3)).toBe(21);
});

test('calculator divide 15 / 3', () => {
    expect(calculator.divide(15, 3)).toBe(5);
});
