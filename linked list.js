'use strict'

//singly linked list

function List() {
    this.head = null;
}


List.prototype.addNode = function(data) {
    let newNode = {
        info: data,
        next: null
    }

    let temp;

    if (!this.head) {
        this.head = newNode
    } else {
        temp = this.head
        while (temp) {
            if (!temp.next) {
                temp.next = newNode
                break;
            } else {
                temp = temp.next
                console.log(`temp.info => ${temp.info}
temp.next => ${temp.next}`)
            }
        }
    }
}

List.prototype.addNodeAnywhere = function(data, node) {
    let newNode = {
        info: data,
        next: null
    }
    let temp;
    if (!this.head) {
        this.head = newNode
    } else {
        temp = this.head
        while (temp) {
            if (temp.info === node) {
                newNode.next = temp.next
                temp.next = newNode
                break;
            } else {
                temp = temp.next
                console.log(`temp.info => ${temp.info}
temp.next => ${temp.next}`)
            }
        }
    }

}

List.prototype.deleteNode = function(data) {
    let temp
    temp = this.head
    while (temp) {
        if (temp.next.info === data) {
            temp.next = temp.next.next
            console.log(`node deleted`)
            break;
        } else {
        	temp = temp.next        	
        }
    }
}

let myList = new List()
myList.addNode(20)
myList.addNode(30)
myList.addNode(40)
myList.addNodeAnywhere(50, 30)
console.log(JSON.stringify(myList))
myList.deleteNode(50)
console.log(JSON.stringify(myList))
