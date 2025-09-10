type Bucket = 'one' | 'two';

class BucketState {
    public readonly history: [number, number][] = [];

    constructor(
        public b1: number,
        public b2: number,
        history: [number, number][] = [],
    ) {
        this.history = [...history, [b1, b2]];
    }

    get moves(): number {
        return this.history.length;
    }

    get key(): string {
        return `${this.b1},${this.b2}`;
    }
}

export class TwoBucket {
    private readonly startNode: BucketState;
    private readonly goal: number;
    private readonly capacity1: number;
    private readonly capacity2: number;
    private readonly visited = new Set<string>();
    private readonly starter: Bucket;
    public goalBucket?: Bucket;
    public otherBucket: number = 0;

    constructor(
        capacity1: number,
        capacity2: number,
        goal: number,
        starter: Bucket,
    ) {
        this.capacity1 = capacity1;
        this.capacity2 = capacity2;
        this.goal = goal;
        this.starter = starter;
        if (starter === 'one') {
            this.startNode = new BucketState(this.capacity1, 0);
        } else {
            this.startNode = new BucketState(0, this.capacity2);
        }
        this.visited.add(this.startNode.key);
    }

    private pour(from: Bucket, state: BucketState): BucketState {
        const { b1, b2, history } = state;
        if (from === 'one') {
            const newB2 = Math.min(this.capacity2, b2 + b1);
            const newB1 = b1 - (newB2 - b2);
            return new BucketState(newB1, newB2, history);
        }
        const newB1 = Math.min(this.capacity1, b1 + b2);
        const newB2 = b2 - (newB1 - b1);
        return new BucketState(newB1, newB2, history);
    }

    private empty(bucket: Bucket, state: BucketState): BucketState {
        const { b1, b2, history } = state;
        if (bucket === 'one') {
            return new BucketState(0, b2, history);
        }
        return new BucketState(b1, 0, history);
    }

    private fill(bucket: Bucket, state: BucketState): BucketState {
        const { b1, b2, history } = state;
        if (bucket === 'one') {
            return new BucketState(this.capacity1, b2, history);
        }
        return new BucketState(b1, this.capacity2, history);
    }

    moves(): number {
        const queue = [this.startNode];
        while (queue.length) {
            const curr = queue.shift();
            if (!curr) continue;
            if (curr.b1 === this.goal) {
                this.goalBucket = 'one';
                this.otherBucket = curr.b2;
                return curr.moves;
            }
            if (curr.b2 === this.goal) {
                this.goalBucket = 'two';
                this.otherBucket = curr.b1;
                return curr.moves;
            }

            const nextStates = [
                this.pour('one', curr),
                this.pour('two', curr),
                this.empty('one', curr),
                this.empty('two', curr),
                this.fill('one', curr),
                this.fill('two', curr),
            ];

            for (const next of nextStates) {
                if (
                    this.starter === 'one' &&
                    next.b1 === 0 &&
                    next.b2 === this.capacity2
                ) {
                    continue;
                }
                if (
                    this.starter === 'two' &&
                    next.b2 === 0 &&
                    next.b1 === this.capacity1
                ) {
                    continue;
                }

                if (!this.visited.has(next.key)) {
                    this.visited.add(next.key);
                    queue.push(next);
                }
            }
        }
        throw new Error('Goal is not reachable');
    }
}
