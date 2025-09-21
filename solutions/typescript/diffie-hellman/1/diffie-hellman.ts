const isPrime = (num: number): boolean => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

export class DiffieHellman {
    private readonly p: number;
    private readonly g: number;

    constructor(p: unknown, g: unknown) {
        if (typeof p !== 'number' || typeof g !== 'number') {
            throw new Error('Arguments must be numbers.');
        }
        if (!isPrime(p) || !isPrime(g)) {
            throw new Error('Constructor arguments must be prime numbers.');
        }
        if (p < 1 || g < 1) {
            throw new Error('Arguments must be positive.');
        }
        this.p = p;
        this.g = g;
    }

    public getPublicKey(privateKey: unknown): number {
        if (typeof privateKey !== 'number') {
            throw new Error('Private key must be a number.');
        }
        if (privateKey <= 1 || privateKey >= this.p) {
            throw new Error('Invalid private key.');
        }

        const result = BigInt(this.g) ** BigInt(privateKey) % BigInt(this.p);
        return Number(result);
    }

    public getSecret(theirPublicKey: unknown, myPrivateKey: unknown): number {
        if (
            typeof theirPublicKey !== 'number' ||
            typeof myPrivateKey !== 'number'
        ) {
            throw new Error('Arguments must be numbers.');
        }
        if (myPrivateKey <= 1 || myPrivateKey >= this.p) {
            throw new Error('Invalid private key.');
        }

        const result =
            BigInt(theirPublicKey) ** BigInt(myPrivateKey) % BigInt(this.p);
        return Number(result);
    }
}
