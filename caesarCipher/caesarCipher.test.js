import { caesarChiper } from './caesarCipher';


test('encrypt hello, world', () => {
    expect(caesarChiper('hello, world', 13)).toBe('uryyb, jbeyq');
});

test('encrypt should work on uppercase', () => {
    expect(caesarChiper('HELLO WORLD', 13)).toBe('uryyb jbeyq'.toUpperCase());
})

