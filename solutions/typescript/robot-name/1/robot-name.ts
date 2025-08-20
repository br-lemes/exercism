export class Robot {
    private static usedNames = new Set<string>();
    private _name: string;

    constructor() {
        this._name = this.generateName();
    }

    public get name(): string {
        return this._name;
    }

    public resetName(): void {
        this._name = this.generateName();
    }

    public static releaseNames(): void {
        Robot.usedNames.clear();
    }

    private generateName(): string {
        let name: string;
        do {
            name = this.generateRandomName();
        } while (Robot.usedNames.has(name));
        Robot.usedNames.add(name);
        return name;
    }

    private generateRandomName(): string {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const digits = '0123456789';
        let name = '';
        for (let i = 0; i < 2; i++) {
            name += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        for (let i = 0; i < 3; i++) {
            name += digits.charAt(Math.floor(Math.random() * digits.length));
        }
        return name;
    }
}
