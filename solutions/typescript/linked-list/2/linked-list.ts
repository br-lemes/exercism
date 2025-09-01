class Node<TElement> {
    public value: TElement;
    public next: this | null = null;
    public prev: this | null = null;

    constructor(value: TElement) {
        this.value = value;
    }
}

export class LinkedList<TElement> {
    private head: Node<TElement> | null = null;
    private tail: Node<TElement> | null = null;
    private length = 0;

    public push(element: TElement) {
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

    public pop(): TElement {
        if (!this.tail) {
            throw new Error('List is empty');
        }

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

    public shift(): TElement {
        if (!this.head) {
            throw new Error('List is empty');
        }

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

    public unshift(element: TElement) {
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

    public delete(element: TElement) {
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
                if (currentNode.prev) currentNode.prev.next = currentNode.next;
                if (currentNode.next) currentNode.next.prev = currentNode.prev;
                this.length--;
                return;
            }
            currentNode = currentNode.next;
        }
    }

    public count(): number {
        return this.length;
    }
}
