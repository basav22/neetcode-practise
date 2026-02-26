

class Solution {

    deque = [];
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        this.deque.push(root);
        let res = [];
        while(this.deque.length > 0) {
            let len = this.deque.length;
            let level = [];
            for(let i of Array(len).keys()) {
                let cur = this.deque.shift();
                if(cur) {
                    level.push(cur.val);
                    this.deque.push(cur.left);
                    this.deque.push(cur.right);
                }
            }
            if(level.length)
                res.push(level);
        }
        return res;
    }
}