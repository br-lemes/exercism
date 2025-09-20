export function convert(input: string): string {
    const lines = input.split('\n');
    if (lines.length % 4 !== 0) {
        throw new Error(
            'Invalid input: number of lines must be a multiple of 4',
        );
    }

    const result: string[] = [];
    for (let i = 0; i < lines.length; i += 4) {
        const line1 = lines[i];
        const line2 = lines[i + 1];
        const line3 = lines[i + 2];
        result.push(parseLine(line1, line2, line3));
    }

    return result.join(',');
}

function parseLine(line1: string, line2: string, line3: string): string {
    if (
        line1.length % 3 !== 0 ||
        line2.length % 3 !== 0 ||
        line3.length % 3 !== 0
    ) {
        throw new Error(
            'Invalid input: number of columns must be a multiple of 3',
        );
    }

    let result = '';
    for (let i = 0; i < line1.length; i += 3) {
        const char1 = line1.substring(i, i + 3);
        const char2 = line2.substring(i, i + 3);
        const char3 = line3.substring(i, i + 3);
        result += parseChar(char1, char2, char3);
    }
    return result;
}

function parseChar(char1: string, char2: string, char3: string): string {
    const pattern = char1 + char2 + char3;
    switch (pattern) {
        case ' _ | ||_|':
            return '0';
        case '     |  |':
            return '1';
        case ' _  _||_ ':
            return '2';
        case ' _  _| _|':
            return '3';
        case '   |_|  |':
            return '4';
        case ' _ |_  _|':
            return '5';
        case ' _ |_ |_|':
            return '6';
        case ' _   |  |':
            return '7';
        case ' _ |_||_|':
            return '8';
        case ' _ |_| _|':
            return '9';
        default:
            return '?';
    }
}
