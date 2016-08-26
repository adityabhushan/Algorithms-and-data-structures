'use strict'

function Stack() {
    this.first = null
}

Stack.prototype.push = function(data) {
    let node = {
        info: data,
        next: null
    }
    let temp

    if (!this.first)
        this.first = node
    else {
        temp = this.first
        while (temp) {
            if (!temp.next) {
                temp.next = node
                break;
            } else {
                temp = temp.next
            }
        }
    }
}

Stack.prototype.pop = function() {
    let temp
    temp = this.first
    if (!temp.next) {
        this.first = null
    } else {
        while (temp) {
            if (!temp.next.next) {
                temp.next = null
                break;
            } else {
                temp = temp.next
            }
        }
    }
}

let myStack = new Stack()
myStack.push(10)
// myStack.push(20)
// myStack.push(30)
// myStack.push(40)
console.log(JSON.stringify(myStack))
myStack.pop()
console.log(JSON.stringify(myStack))
