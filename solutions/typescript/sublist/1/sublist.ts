type Comparison = 'equal' | 'sublist' | 'superlist' | 'unequal';

export class List {
    private list: number[];

    constructor(...list: number[]) {
        this.list = list;
    }

    public compare(other: List): Comparison {
        if (this.isEqual(other)) {
            return 'equal';
        }
        if (this.isSublist(other)) {
            return 'sublist';
        }
        if (this.isSuperlist(other)) {
            return 'superlist';
        }
        return 'unequal';
    }

    private isEqual(other: List): boolean {
        if (this.list.length !== other.list.length) {
            return false;
        }
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] !== other.list[i]) {
                return false;
            }
        }
        return true;
    }

    private isSublist(other: List): boolean {
        if (this.list.length >= other.list.length) {
            return false;
        }
        for (let i = 0; i <= other.list.length - this.list.length; i++) {
            let isSub = true;
            for (let j = 0; j < this.list.length; j++) {
                if (other.list[i + j] !== this.list[j]) {
                    isSub = false;
                    break;
                }
            }
            if (isSub) {
                return true;
            }
        }
        return false;
    }

    private isSuperlist(other: List): boolean {
        if (this.list.length <= other.list.length) {
            return false;
        }
        for (let i = 0; i <= this.list.length - other.list.length; i++) {
            let isSuper = true;
            for (let j = 0; j < other.list.length; j++) {
                if (this.list[i + j] !== other.list[j]) {
                    isSuper = false;
                    break;
                }
            }
            if (isSuper) {
                return true;
            }
        }
        return false;
    }
}
