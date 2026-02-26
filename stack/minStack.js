

class MinStack{

    // 2, 4, 1, 5
    
    constructor() {
        this.list = [];
        this.minHeap = [];
    }
    

    push(it) {
        this.list.push(it);
        if(this.minHeap.length == 0) {
            this.minHeap.push(it);
        } else {

            this.minHeap.push(this.minHeap[this.minHeap.length-1] > it ? it : this.minHeap[this.minHeap.length-1])
        }
    }
    
    pop() {
        let res = this.list.pop();
        this.minHeap.pop();
        return res;
    }

    top() {

        return this.list.length > 0 ? this.list[this.list.length - 1] : null;
    } 

    getMin() {

        return this.minHeap.length > 0 ? this.minHeap[this.minHeap.length - 1] : null;
    } 

}

let  minStack = new MinStack();
minStack.push(-2);
minStack.push(-2);

minStack.push(-3);
minStack.push(-3);

a=minStack; // return 0
a

// b=minStack.minHeap;
// b

// a=minStack.pop();
// a
// b=minStack.minHeap;
// b
// a= minStack.top();    // return 2
// a
// b=minStack.minHeap;
// b
