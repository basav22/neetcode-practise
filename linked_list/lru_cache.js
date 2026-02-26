class MyNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.left = null;
        this.right = null;
    }

}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.left = new MyNode(0,0);
        this.right = new MyNode(0,0);
        this.left.right = this.right;
        this.right.left = this.left;
        this.cache = new Map();
    }

    delete(node) {
        let prev = node.left, next = node.right;
        prev.right = next;
        next.left = prev;
    }

    insert(node) { // insert just to right
        let right = this.right, left = this.right.left;
        left.right = node;
        node.right = right;
        right.left = node;
        node.left = left;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)) {
            // delete node and insert at end (Most recent)
            this.delete(this.cache.get(key));
            this.insert(this.cache.get(key));
            return this.cache.get(key).val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // delete node if key exists earlier
        if(this.cache.has(key))
            this.delete(this.cache.get(key));
        // create new node
        let newNode = new MyNode(key, value);
        this.insert(newNode);
        // add to map
        this.cache.set(key, newNode);

        if(this.cache.size > this.capacity) {
            let lruNode = this.left.right;
            this.delete(lruNode); // this is LRU node
            this.cache.delete(lruNode.key); // remove from map too
        }
    }
}