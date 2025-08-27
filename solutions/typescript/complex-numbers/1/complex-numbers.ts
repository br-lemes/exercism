export class ComplexNumber {
    private _real: number;
    private _imag: number;

    constructor(real: number, imaginary: number) {
        this._real = real;
        this._imag = imaginary;
    }

    public get real(): number {
        return this._real;
    }

    public get imag(): number {
        return this._imag;
    }

    public add(other: ComplexNumber): ComplexNumber {
        return new ComplexNumber(
            this.real + other.real,
            this.imag + other.imag,
        );
    }

    public sub(other: ComplexNumber): ComplexNumber {
        return new ComplexNumber(
            this.real - other.real,
            this.imag - other.imag,
        );
    }

    public div(other: ComplexNumber): ComplexNumber {
        const denominator = other.real ** 2 + other.imag ** 2;
        return new ComplexNumber(
            (this.real * other.real + this.imag * other.imag) / denominator,
            (this.imag * other.real - this.real * other.imag) / denominator,
        );
    }

    public mul(other: ComplexNumber): ComplexNumber {
        return new ComplexNumber(
            this.real * other.real - this.imag * other.imag,
            this.imag * other.real + this.real * other.imag,
        );
    }

    public get abs(): number {
        return Math.sqrt(this.real ** 2 + this.imag ** 2);
    }

    public get conj(): ComplexNumber {
        return new ComplexNumber(this.real, this.imag === 0 ? 0 : -this.imag);
    }

    public get exp(): ComplexNumber {
        return new ComplexNumber(
            Math.exp(this.real) * Math.cos(this.imag),
            Math.exp(this.real) * Math.sin(this.imag),
        );
    }
}
