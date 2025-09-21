export function isPaired(input: string): boolean {
    const stack: string[] = [];
    const bracketPairs: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];

    for (const char of input) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            if (stack.length === 0) {
                return false;
            }
            const lastOpen = stack.pop();
            if (lastOpen !== bracketPairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
