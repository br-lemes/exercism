export class Gigasecond {
    private readonly gigasecondDate: Date;

    constructor(initialDate: Date) {
        const gigasecondInMilliseconds = 1000000000 * 1000;
        this.gigasecondDate = new Date(
            initialDate.getTime() + gigasecondInMilliseconds,
        );
    }

    public date(): Date {
        return this.gigasecondDate;
    }
}
