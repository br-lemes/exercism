export class SimpleCipher {
    public key: string;

    constructor(key?: string) {
        if (key === undefined) {
            this.key = this.generateRandomKey();
        } else {
            this.key = key;
        }
    }

    private generateRandomKey(): string {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        for (let i = 0; i < 100; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength),
            );
        }
        return result;
    }

    encode(plaintext: string): string {
        let ciphertext = '';
        for (let i = 0; i < plaintext.length; i++) {
            const plainChar = plaintext.charCodeAt(i) - 97;
            const keyChar = this.key.charCodeAt(i % this.key.length) - 97;
            const cipherChar = (plainChar + keyChar) % 26;
            ciphertext += String.fromCharCode(cipherChar + 97);
        }
        return ciphertext;
    }

    decode(ciphertext: string): string {
        let plaintext = '';
        for (let i = 0; i < ciphertext.length; i++) {
            const cipherChar = ciphertext.charCodeAt(i) - 97;
            const keyChar = this.key.charCodeAt(i % this.key.length) - 97;
            const plainChar = (cipherChar - keyChar + 26) % 26;
            plaintext += String.fromCharCode(plainChar + 97);
        }
        return plaintext;
    }
}
