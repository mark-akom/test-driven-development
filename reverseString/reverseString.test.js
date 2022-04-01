import reverseString from './reverseString'


test("reverse a string", () => {
    expect(reverseString('apple')).toBe('elppa');
    expect(reverseString('book')).toBe('koob');
    expect(reverseString('school')).toBe('loohcs');
});

test('should work on long strings as well', () => {
    expect(reverseString('I am expecting something long')).toBe('gnol gnihtemos gnitcepxe ma I')
})