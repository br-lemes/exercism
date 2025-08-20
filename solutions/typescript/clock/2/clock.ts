export class Clock {
    private hours: number;
    private minutes: number;

    constructor(hours: number, minutes = 0) {
        this.hours = hours;
        this.minutes = minutes;
        this.normalize();
    }

    private normalize() {
        let totalMinutes = this.hours * 60 + this.minutes;
        totalMinutes = ((totalMinutes % (24 * 60)) + 24 * 60) % (24 * 60);
        this.hours = Math.floor(totalMinutes / 60);
        this.minutes = totalMinutes % 60;
    }

    public toString(): string {
        const pad = (num: number) => num.toString().padStart(2, '0');
        return `${pad(this.hours)}:${pad(this.minutes)}`;
    }

    public plus(minutes: number): Clock {
        return new Clock(this.hours, this.minutes + minutes);
    }

    public minus(minutes: number): Clock {
        return new Clock(this.hours, this.minutes - minutes);
    }

    public equals(other: Clock): boolean {
        return this.hours === other.hours && this.minutes === other.minutes;
    }
}
