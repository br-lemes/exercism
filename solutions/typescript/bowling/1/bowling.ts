export class Bowling {
    private rolls: number[] = [];
    private static readonly MAX_PINS = 10;
    private static readonly MAX_FRAMES = 10;

    public roll(pins: number): void {
        if (this.isGameOver()) {
            throw new Error('Cannot roll after game is over');
        }
        this.validateRoll(pins);
        this.rolls.push(pins);
    }

    public score(): number {
        if (!this.isGameOver()) {
            throw new Error('Score cannot be taken until the end of the game');
        }
        let score = 0;
        let rollIndex = 0;
        for (let frame = 0; frame < Bowling.MAX_FRAMES; frame++) {
            if (this.isStrike(rollIndex)) {
                score += this.strikeBonus(rollIndex);
                rollIndex++;
                continue;
            }
            if (this.isSpare(rollIndex)) {
                score += this.spareBonus(rollIndex);
                rollIndex += 2;
                continue;
            }
            score += this.frameSum(rollIndex);
            rollIndex += 2;
        }
        return score;
    }

    private validateRoll(pins: number): void {
        if (pins < 0) {
            throw new Error('Negative roll is invalid');
        }
        if (pins > Bowling.MAX_PINS) {
            throw new Error('Pin count exceeds pins on the lane');
        }

        const { frame, rollInFrame } = this.getCurrentFrameInfo();

        if (frame < Bowling.MAX_FRAMES) {
            if (
                rollInFrame === 1 &&
                this.rolls[this.rolls.length - 1] + pins > Bowling.MAX_PINS
            ) {
                throw new Error('Pin count exceeds pins on the lane');
            }
            return;
        }
        const tenthFrameRolls = this.getTenthFrameRolls();
        if (tenthFrameRolls.length === 1) {
            if (
                tenthFrameRolls[0] < Bowling.MAX_PINS &&
                tenthFrameRolls[0] + pins > Bowling.MAX_PINS
            ) {
                throw new Error('Pin count exceeds pins on the lane');
            }
        }
        if (tenthFrameRolls.length === 2) {
            if (tenthFrameRolls[0] === Bowling.MAX_PINS) {
                if (
                    tenthFrameRolls[1] < Bowling.MAX_PINS &&
                    tenthFrameRolls[1] + pins > Bowling.MAX_PINS
                ) {
                    throw new Error('Pin count exceeds pins on the lane');
                }
            }
        }
    }

    private isGameOver(): boolean {
        const { frame } = this.getCurrentFrameInfo();
        if (frame < Bowling.MAX_FRAMES) {
            return false;
        }

        const tenthFrameRolls = this.getTenthFrameRolls();
        const isTenthFrameStrike = tenthFrameRolls[0] === Bowling.MAX_PINS;
        const isTenthFrameSpare =
            !isTenthFrameStrike &&
            tenthFrameRolls[0] + tenthFrameRolls[1] === Bowling.MAX_PINS;

        if (isTenthFrameStrike) {
            return this.rolls.length >= this.getTenthFrameStartIndex() + 3;
        }
        if (isTenthFrameSpare) {
            return this.rolls.length >= this.getTenthFrameStartIndex() + 3;
        }
        return this.rolls.length >= this.getTenthFrameStartIndex() + 2;
    }

    private getCurrentFrameInfo(): { frame: number; rollInFrame: number } {
        let frame = 1;
        let rollInFrame = 0;
        let rollIndex = 0;
        while (rollIndex < this.rolls.length && frame <= Bowling.MAX_FRAMES) {
            if (this.isStrike(rollIndex)) {
                frame++;
                rollInFrame = 0;
                rollIndex++;
                continue;
            }
            if (rollInFrame === 0) {
                rollInFrame = 1;
                rollIndex++;
                continue;
            }
            frame++;
            rollInFrame = 0;
            rollIndex++;
        }
        return { frame, rollInFrame };
    }

    private getTenthFrameRolls(): number[] {
        const startIndex = this.getTenthFrameStartIndex();
        return this.rolls.slice(startIndex);
    }

    private getTenthFrameStartIndex(): number {
        let frame = 1;
        let rollIndex = 0;
        while (frame < Bowling.MAX_FRAMES) {
            if (this.isStrike(rollIndex)) {
                rollIndex++;
            } else {
                rollIndex += 2;
            }
            frame++;
        }
        return rollIndex;
    }

    private isStrike(rollIndex: number): boolean {
        return this.rolls[rollIndex] === Bowling.MAX_PINS;
    }

    private strikeBonus(rollIndex: number): number {
        return (
            Bowling.MAX_PINS +
            (this.rolls[rollIndex + 1] ?? 0) +
            (this.rolls[rollIndex + 2] ?? 0)
        );
    }

    private isSpare(rollIndex: number): boolean {
        return (
            (this.rolls[rollIndex] ?? 0) + (this.rolls[rollIndex + 1] ?? 0) ===
            Bowling.MAX_PINS
        );
    }

    private spareBonus(rollIndex: number): number {
        return Bowling.MAX_PINS + (this.rolls[rollIndex + 2] ?? 0);
    }

    private frameSum(rollIndex: number): number {
        return (this.rolls[rollIndex] ?? 0) + (this.rolls[rollIndex + 1] ?? 0);
    }
}
