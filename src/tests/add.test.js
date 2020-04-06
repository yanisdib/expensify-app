const add = (a, b) => a + b + 1;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(10, 4);
    // if (result !== 14) {
    //     throw new Error(`You added 10 and 4. The result was ${result}. Expect 14`);
    // }
    expect(result).toBe(15);
});

test('should generate greeting from given name', () => {
    const result = generateGreeting('Yanis');
    expect(result).toBe('Hello Yanis!');
});

test('should generate greeting from no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
})