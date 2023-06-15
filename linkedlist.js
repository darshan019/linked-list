function LinkedList() {
    let head = null

    const append = (val) => {
        let newNode = new Node(val)
        
        if(head == null) {
            head = newNode
        }
        else {
            let current = head
            while(current.nextNode !== null){
                current = current.nextNode
            }
            current.nextNode = newNode
        }
    }

    const prepend = (val) => {
        let preNode = new Node(val)

        if(head == null) {
            head = preNode
        }
        else {
            preNode.nextNode = head
            head = preNode
            //console.log(head)
        }
    }

    const size = () => {
        let sizeOfList = 0
        let currentNode = head
        while(currentNode !== null) {
            currentNode = currentNode.nextNode
            sizeOfList++
        }
        return sizeOfList
    }

    const printList = () => {
        let current = head;
        let list = ''
        while(current !== null){
            list += current.value + ' -> '
            current = current.nextNode
        }
        list += 'null'
        
        return list

    }
    const headNode = () => {
        let topValue = head.value
        return topValue
    }

    const tailNode = () => {
        let currentNode = head
        let listLength = size()
        let i = 1
        while(i <= listLength - 1 && currentNode !== null) {
            currentNode = currentNode.nextNode
            i++
        }
        let tailValue = currentNode.value
        return tailValue
    }

    const at = (index) => {
        let indexNode = head
        let i = 0
        while(i <= index - 1 && indexNode !== null) {
            indexNode = indexNode.nextNode
            i++
        }
        if(indexNode == null) return null
        let indexValue = indexNode.value
        return indexValue
    }

    const pop = () => {
        if(head == null) return null

        if(head.nextNode == null) {
            const value = head.value
            head = null
            return value
        }

        let currentNode = head;
        let prevNode = null;

        while (currentNode.nextNode !== null) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        prevNode.nextNode = null;

        return currentNode.value;
        
    }

    const contains = (target) => {
        let currentValueNode = head
        while(currentValueNode !== null) {
            if(currentValueNode.value == target) return true
            currentValueNode = currentValueNode.nextNode
        }
        return false
    }

    const find = (element) => {
        if(!contains(element)) return -1

        let valueNode = head
        let i = 0
        let len = size()
        while(i <= len - 1 && valueNode !== null) {
            if(valueNode.value == element) return i
            valueNode = valueNode.nextNode
            i++
        }

    }

    return {
        append,
        printList,
        prepend,
        size,
        headNode,
        tailNode,
        at,
        pop,
        contains,
        find
    }
}

function Node(value = null, nextNode = null) {
    return {
        value,
        nextNode
    }
}


const list = LinkedList()
list.append(8)
list.append(15)
list.append(18)
list.prepend(4)
list.append(20)
list.append(22)
list.prepend(2)
console.log(list.pop())
console.log(list.printList())
console.log(list.size())
console.log(list.contains(30))
console.log(list.find(4))
console.log(list.headNode())
console.log(list.tailNode())