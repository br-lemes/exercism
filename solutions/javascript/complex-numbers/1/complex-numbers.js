export class ComplexNumber {
    #real;
    #imag;

    /**
     * @param {number} real
     * @param {number} imag
     */
    constructor(real, imag) {
        this.#real = real;
        this.#imag = imag;
    }

    get real() {
        return this.#real;
    }

    get imag() {
        return this.#imag;
    }

    /** @param {ComplexNumber} other */
    add(other) {
        return new ComplexNumber(
            this.#real + other.#real,
            this.#imag + other.#imag,
        );
    }

    /** @param {ComplexNumber} other */
    sub(other) {
        return new ComplexNumber(
            this.#real - other.#real,
            this.#imag - other.#imag,
        );
    }

    /** @param {ComplexNumber} other */
    div(other) {
        const denominator = other.#real ** 2 + other.#imag ** 2;
        return new ComplexNumber(
            (this.#real * other.#real + this.#imag * other.#imag) / denominator,
            (this.#imag * other.#real - this.#real * other.#imag) / denominator,
        );
    }

    /** @param {ComplexNumber} other */
    mul(other) {
        return new ComplexNumber(
            this.#real * other.#real - this.#imag * other.#imag,
            this.#imag * other.#real + this.#real * other.#imag,
        );
    }

    get abs() {
        return Math.sqrt(this.#real ** 2 + this.#imag ** 2);
    }

    get conj() {
        return new ComplexNumber(
            this.#real,
            this.#imag === 0 ? 0 : -this.#imag,
        );
    }

    get exp() {
        return new ComplexNumber(
            Math.exp(this.#real) * Math.cos(this.#imag),
            Math.exp(this.#real) * Math.sin(this.#imag),
        );
    }
}
