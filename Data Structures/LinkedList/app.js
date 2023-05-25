// const node1 =
// {
//     value:100,
// };

// const node2 =
// {
//     value:200,
// }
// const node3 =
// {
//     value:300,
// }
// const node4 =
// {
//     value:400,
// }

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = null;


// console.log(node1,node2,node3,node4);

class Node
{
    constructor(value)
    {
        this._value = value;
        this.next = null;
    }
}

class LinkedList
{
    constructor()
    {
        this._head = null;
        this._length = 0;
    }
    // Insert first node (Head)
    insertFirst(value)
    {
        const newNode = new Node(value);
        newNode.next = this._head;
        this._head = newNode;
        this._length++;
    }
    
    // Insert last node (Tail)
    insertLast(value)
    {
        const newNode = new Node(value);
        let current = this._head;

        while (current.next)
        {
            current = current.next;
        }

        current.next = newNode;
        this._length++;
    }
    
    // Insert at index
    insertAt(value, index)
    {
        if(index > this._length)
        {
            return;
        }
        if (index === 0)
        {
            this.insertFirst(value);
            return;
        }

        const newNode = new Node(value);
        let current, previous;
        current = this._head;
        let count = 0;

        while(count < index)
        {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        previous.next = newNode;
        this._length++;
    }

    // Get at index
    getAt(index)
    {
        let current = this._head;
        let count = 0;
        while(current)
        {
            if(count === index)
            {
                console.log(current._value);
            }
            count++
            current = current.next;

        }
        return null;
    }
    
    // Remove at index
    removeAt(index)
    {
        if (index > this._length) return;

        let current = this._head;
        let previous;
        let count = 0;

        if(index === 0)
        {
            this._head = current.next;
        }
        else
        {
            while(count < index)
            {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            
        }

        this._length--;
    }

    // Print List Data
    printListData()
    {
        let current = this._head;
        let list ='';
        
        while(current)
        {
            list += current._value + ' ';

            current = current.next;
        }

        console.log(list);
    }

    // Clear List
    clearList()
    {
        this._head = null;
        this._length = 0;
    }

}

const list = new LinkedList()

list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);
list.insertLast(50);
list.insertAt(250,2);


console.log(list);
list.printListData();
list.getAt(2)
list.removeAt(2);
list.printListData();
list.getAt(2)
// list.clearList();
// list.printListData();








