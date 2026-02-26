
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    // inorder
    kthSmallest(root, k) {
        // let res;
        // this.dfs(root, 0, k, res);
        // return res;
        let arr = [];
        this.dfs2(root, arr);
        return arr[k-1];
    }
   
    dfs2(root, arr) {
        if(!root)
            return;
        this.dfs2(root.left, arr);
        arr.push(root.val);
        this.dfs2(root.right, arr);
    }
}

let arr = [2,3,4,5], k=2;
