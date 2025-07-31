
export class InvalidInputError extends Error {
    constructor(message: string) {
        super();
        this.message = message || 'Invalid Input';
    }
}

type Direction = 'north' | 'east' | 'south' | 'west'
type Coordinates = [number, number]

export class Robot {
    private _bearing: Direction;
    private _coordinates: Coordinates;

    constructor() {
        this._bearing = 'north';
        this._coordinates = [0, 0];
    }

    get bearing(): Direction {
        return this._bearing;
    }

    get coordinates(): Coordinates {
        return this._coordinates;
    }

    place({ x, y, direction }: { x: number; y: number; direction: string }) {
        const d = direction;
        if (d !== 'north' && d !== 'east' && d !== 'south' && d !== 'west') {
            throw new InvalidInputError(`Invalid direction: ${direction}`);
        }
        this._coordinates = [x, y];
        this._bearing = d;
    }

    evaluate(instructions: string) {
        for (const instruction of instructions) {
            switch (instruction) {
                case 'L': this.turnLeft(); break;
                case 'R': this.turnRight(); break;
                case 'A': this.advance(); break;
                default: throw new InvalidInputError(
                    `Invalid instruction: ${instruction}`,
                );
            }
        }
    }

    private turnLeft() {
        const directions: Direction[] = ['north', 'west', 'south', 'east'];
        this._bearing = directions[(directions.indexOf(this._bearing) + 1) % 4];
    }

    private turnRight() {
        const directions: Direction[] = ['north', 'east', 'south', 'west'];
        this._bearing = directions[(directions.indexOf(this._bearing) + 1) % 4];
    }

    private advance() {
        switch (this._bearing) {
            case 'north': this._coordinates[1]++; break;
            case 'east': this._coordinates[0]++; break;
            case 'south': this._coordinates[1]--; break;
            case 'west': this._coordinates[0]--; break;
        }
    }
}
