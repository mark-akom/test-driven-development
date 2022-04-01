import { capitalize } from './capitalize';


test('capitalize the string', () => {
    expect(capitalize('goat')).toBe('Goat');
    expect(capitalize('table')).toBe('Table');
    expect(capitalize('pineapple')).toBe('Pineapple');
})

test('capitalize should work on multiple words', () => {
    expect(capitalize('i am going to work today')).toBe('I Am Going To Work Today');
})