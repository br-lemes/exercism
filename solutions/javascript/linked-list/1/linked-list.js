/** @template T */
export class Node {
    /** @param {T} value */
    constructor(value) {
        /** @type {T} */
        this.value = value;
        /** @type {Node<T> | null} */
        this.next = null;
        /** @type {Node<T> | null} */
        this.prev = null;
    }
}

/** @template T */
export class LinkedList {
    constructor() {
        /** @type {Node<T> | null} */
        this.head = null;
        /** @type {Node<T> | null} */
        this.tail = null;
        /** @type {number} */
        this.length = 0;
    }

    /** @param {T} element */
    push(element) {
        const newNode = new Node(element);

        this.length++;
        if (this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
    }

    pop() {
        const value = this.tail.value;
        this.tail = this.tail.prev;
        this.length--;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        return value;
    }

    shift() {
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        return value;
    }

    /** @param {T} element */
    unshift(element) {
        const newNode = new Node(element);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }

    /** @param {T} element */
    delete(element) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === element) {
                if (currentNode === this.head) {
                    this.shift();
                    return;
                }
                if (currentNode === this.tail) {
                    this.pop();
                    return;
                }
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
                this.length--;
                return;
            }
            currentNode = currentNode.next;
        }
    }

    count() {
        return this.length;
    }
}
