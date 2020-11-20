// simplelinkedList

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = null;

    }
}
/* const n1 = new Node(500)
console.log(n1); */
class LinkedList {
    constructor() {
            this.head = null;
            this.size = 0;
        }
        //Insert first node
    inserAtFirst(data) {
            this.head = new Node(data, this.head)
            this.size++

        }
        //Inser last node
    inserAtLast() {
        let node = new Node(data);
        let current;

        // If empty, make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }


    //Insert at index
    //Get at index
    //Remove at index
    //Clear List
    //Print list data
    printListData() {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }
}


const lin_list = new LinkedList()
lin_list.inserAtFirst(400);
lin_list.inserAtFirst(600);
lin_list.inserAtFirst(800);
lin_list.inserAtFirst(200);
lin_list.inserAtFirst(500);
lin_list.printListData()