export class ValueError extends Error {
    constructor() {
        super('Bank account error');
    }
}

export class BankAccount {
    private _balance = 0;
    private isOpen = false;

    public open(): void {
        if (this.isOpen) {
            throw new ValueError();
        }
        this.isOpen = true;
        this._balance = 0;
    }

    public close(): void {
        if (!this.isOpen) {
            throw new ValueError();
        }
        this.isOpen = false;
    }

    public deposit(amount: number): void {
        if (!this.isOpen || amount < 0) {
            throw new ValueError();
        }
        this._balance += amount;
    }

    public withdraw(amount: number): void {
        if (!this.isOpen || amount < 0 || amount > this._balance) {
            throw new ValueError();
        }
        this._balance -= amount;
    }

    public get balance(): number {
        if (!this.isOpen) {
            throw new ValueError();
        }
        return this._balance;
    }
}
