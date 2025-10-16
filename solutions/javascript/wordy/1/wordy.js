/** @param {string} question */
export const answer = (question) => {
    if (!question.startsWith('What is') || !question.endsWith('?')) {
        if (question.includes('cubed')) {
            throw new Error('Unknown operation');
        }
        if (question.startsWith('Who is')) {
            throw new Error('Unknown operation');
        }
        throw new Error('Syntax error');
    }

    const expression = question.slice(8, -1).trim();

    if (expression === '') {
        throw new Error('Syntax error');
    }

    const tokens = expression.split(' ');

    let result = parseInt(tokens[0], 10);
    if (Number.isNaN(result)) {
        throw new Error('Syntax error');
    }

    let i = 1;
    while (i < tokens.length) {
        const operator = tokens[i];
        /** @type {number} */
        let operand;

        if (operator === 'plus' || operator === 'minus') {
            operand = parseInt(tokens[i + 1], 10);
            if (Number.isNaN(operand)) {
                throw new Error('Syntax error');
            }
            if (operator === 'plus') {
                result += operand;
            } else {
                result -= operand;
            }
            i += 2;
        } else if (operator === 'multiplied' || operator === 'divided') {
            if (tokens[i + 1] !== 'by') {
                throw new Error('Syntax error');
            }
            operand = parseInt(tokens[i + 2], 10);
            if (Number.isNaN(operand)) {
                throw new Error('Syntax error');
            }
            if (operator === 'multiplied') {
                result *= operand;
            } else {
                result /= operand;
            }
            i += 3;
        } else {
            if (Number.isNaN(parseInt(operator, 10))) {
                throw new Error('Unknown operation');
            } else {
                throw new Error('Syntax error');
            }
        }
    }

    return result;
};
