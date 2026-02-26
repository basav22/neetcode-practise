
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    
    constructor(capacity) {
        this.cache = new Map(); // store key, node
        this.capacity = capacity;

        // leftnode to track lru node
        this.left = new Node(0,0);
        
        // rightnode to track most used node
        this.right = new Node(0,0);

        this.left.next = this.right;
        this.right.prev = this.left;
    }

   
    get(key) {
        if(this.cache.has(key)){
            let node = this.cache.get(key);
            // warm cache
            this.delete(node);
            
            let newNode = new Node(node.key, node.val);
            this.insert(newNode);

            this.cache.set(key, newNode);
            return newNode.val;
        } else {
            return -1;
        }
    }

    insert(node) { // insert at end - we have right dummy node
        //    4 -> 6 -> 0
        let tmp = this.right.prev;
        this.right.prev.next = node;
        this.right.prev = node;

        node.next = this.right;
        node.prev = tmp;
    }

    delete(node){ // deletes node
        //  0 -> 4 -> 6 -> 0
        let tmp = node.prev;
        node.prev.next = node.next;
        node.next.prev = tmp;
    }

    
    put(key, value) {
        // already there
        if(this.cache.has(key)) {
            // already cache present
            let node = this.cache.get(key);
            // delete
            this.delete(node);
        }
        let newNode = new Node(key, value);
        this.insert(newNode);
        // update cache
        this.cache.set(key, newNode);

        // eviction
        if(this.cache.size > this.capacity) {
            // delete left
            let lruNode = this.left.next;
            this.delete(lruNode);
            // should update cache
            this.cache.delete(lruNode.key);
        }
    }
}