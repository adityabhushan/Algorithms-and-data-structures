'use strict'

function Queue() {
    this.head = this.tail = null

}

Queue.prototype.add = function(data) {
    let newNode = {
        info: data,
        next: null
    }

    let temp;

    if (!this.head) {
        this.head = this.tail = newNode


    } else {
        this.tail.next = newNode
        this.tail = newNode
    }
}

Queue.prototype.del = function() {
    if (!this.head) {
        console.log("empty queue")
        return
    } else {
        this.head = this.head.next
    }

}

Queue.prototype.printNode = function() {
    let current = this.head
    while (current) {
        console.log(current.info)
        current = current.next
        console.log(this.tail.info)
    }
}


let myQueue = new Queue()
myQueue.add(10)
myQueue.add(20)
myQueue.add(30)
myQueue.add(40)
myQueue.add(50)
myQueue.add(60)

console.log(JSON.stringify(myQueue))
myQueue.del()
console.log(JSON.stringify(myQueue))
