export class Crypto {
    private normalizedText: string;
    private cols: number;
    private rows: number;

    constructor(plainText: string) {
        this.normalizedText = plainText
            .replace(/[^a-zA-Z0-9]/g, '')
            .toLowerCase();
        const len = this.normalizedText.length;
        if (len === 0) {
            this.cols = 0;
            this.rows = 0;
        } else {
            this.cols = Math.ceil(Math.sqrt(len));
            this.rows = Math.ceil(len / this.cols);
        }
    }

    get ciphertext(): string {
        if (this.normalizedText.length === 0) {
            return '';
        }

        const chunks = [];
        for (let i = 0; i < this.cols; i++) {
            let chunk = '';
            for (let j = 0; j < this.rows; j++) {
                const index = i + j * this.cols;
                if (index < this.normalizedText.length) {
                    chunk += this.normalizedText[index];
                } else {
                    chunk += ' ';
                }
            }
            chunks.push(chunk);
        }

        return chunks.join(' ');
    }
}
