export class CustomSet {
    private elements: Set<number>;

    constructor(initial: number[] = []) {
        this.elements = new Set(initial);
    }

    empty(): boolean {
        return this.elements.size === 0;
    }

    contains(element: number): boolean {
        return this.elements.has(element);
    }

    add(element: number): CustomSet {
        this.elements.add(element);
        return this;
    }

    subset(other: CustomSet): boolean {
        for (const element of this.elements) {
            if (!other.contains(element)) {
                return false;
            }
        }
        return true;
    }

    disjoint(other: CustomSet): boolean {
        for (const element of this.elements) {
            if (other.contains(element)) {
                return false;
            }
        }
        return true;
    }

    eql(other: CustomSet): boolean {
        if (this.elements.size !== other.elements.size) {
            return false;
        }
        return this.subset(other);
    }

    union(other: CustomSet): CustomSet {
        const newSet = new CustomSet();
        for (const element of this.elements) {
            newSet.add(element);
        }
        for (const element of other.elements) {
            newSet.add(element);
        }
        return newSet;
    }

    intersection(other: CustomSet): CustomSet {
        const newSet = new CustomSet();
        this.elements.forEach((element) => {
            if (other.contains(element)) {
                newSet.add(element);
            }
        });
        return newSet;
    }

    difference(other: CustomSet): CustomSet {
        const newSet = new CustomSet();
        this.elements.forEach((element) => {
            if (!other.contains(element)) {
                newSet.add(element);
            }
        });
        return newSet;
    }
}
