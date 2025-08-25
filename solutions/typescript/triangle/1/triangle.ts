export class Triangle {
    private a: number;
    private b: number;
    private c: number;
    private valid: boolean = true;

    constructor(...sides: number[]) {
        const [a, b, c] = sides;

        if (a <= 0 || b <= 0 || c <= 0) {
            this.valid = false;
        }
        if (a + b < c || a + c < b || b + c < a) {
            this.valid = false;
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get isEquilateral() {
        if (!this.valid) {
            return false;
        }
        if (this.a === this.b && this.b === this.c) {
            return true;
        }
        return false;
    }

    get isIsosceles() {
        if (!this.valid) {
            return false;
        }
        if (this.a === this.b || this.b === this.c || this.a === this.c) {
            return true;
        }
        return false;
    }

    get isScalene() {
        if (!this.valid) {
            return false;
        }
        if (this.a !== this.b && this.b !== this.c && this.a !== this.c) {
            return true;
        }
        return false;
    }
}
