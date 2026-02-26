
class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        return this.dfs(root, -Infinity,Infinity);
    }

    dfs(cur, min, max) {
        if(!cur) 
            return true;

        let res = (min < cur.val && cur.val < max);
        res &= this.dfs(cur.left, min, cur.val);
        res &= this.dfs(cur.right, cur.val, max);
        return res == 1;
    }
}