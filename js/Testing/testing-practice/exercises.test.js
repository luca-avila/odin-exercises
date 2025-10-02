import { capitalize, reverseString } from './exercises';

test('capitalize test', () => {
    expect(capitalize('test')).toBe('Test');
});

test('reverse string hello world!', () => {
    expect(reverseString('Hello World!').toBe('!dlroW olleH'));
});
