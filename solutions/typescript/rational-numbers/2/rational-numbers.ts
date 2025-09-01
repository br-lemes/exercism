export class Rational {
    public numerator: number;
    public denominator: number;

    constructor(numerator: number, denominator: number) {
        if (denominator === 0) {
            throw new Error('Denominator cannot be zero.');
        }

        const commonDivisor = this.gcd(numerator, denominator);
        this.numerator = numerator / commonDivisor;
        this.denominator = denominator / commonDivisor;

        if (this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
    }

    add(other: Rational): Rational {
        const newNumerator =
            this.numerator * other.denominator +
            other.numerator * this.denominator;
        const newDenominator = this.denominator * other.denominator;
        return new Rational(newNumerator, newDenominator);
    }

    sub(other: Rational): Rational {
        const newNumerator =
            this.numerator * other.denominator -
            other.numerator * this.denominator;
        const newDenominator = this.denominator * other.denominator;
        return new Rational(newNumerator, newDenominator);
    }

    mul(other: Rational): Rational {
        const newNumerator = this.numerator * other.numerator;
        const newDenominator = this.denominator * other.denominator;
        return new Rational(newNumerator, newDenominator);
    }

    div(other: Rational): Rational {
        if (other.numerator === 0) {
            throw new Error('Cannot divide by zero.');
        }
        const newNumerator = this.numerator * other.denominator;
        const newDenominator = this.denominator * other.numerator;
        return new Rational(newNumerator, newDenominator);
    }

    abs(): Rational {
        return new Rational(
            Math.abs(this.numerator),
            Math.abs(this.denominator),
        );
    }

    exprational(n: number): Rational {
        if (n >= 0) {
            return new Rational(this.numerator ** n, this.denominator ** n);
        } else {
            return new Rational(
                this.denominator ** Math.abs(n),
                this.numerator ** Math.abs(n),
            );
        }
    }

    expreal(n: number): number {
        return n ** (this.numerator / this.denominator);
    }

    reduce(): Rational {
        return this;
    }

    private gcd(a: number, b: number): number {
        return b === 0 ? a : this.gcd(b, a % b);
    }
}
