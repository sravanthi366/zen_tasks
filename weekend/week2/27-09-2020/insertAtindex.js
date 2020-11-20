class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = null;

    }

}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertAt(data, index) {
        //  If index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        // If first index
        if (index === 0) {
            this.insertAt(data);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }
}

const ll = new LinkedList();

ll.insertAt(100, 0)
ll.insertAt(200, 1)
ll.insertAt(300, 2)
console.log(ll)