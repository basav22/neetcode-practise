
class Solution {

    res = 0;
    diameterOfBinaryTree(root) {
        this.dfs(root);
        return this.res;
    }

    dfs(cur) {
        if(!cur)
            return 0;
        let leftHeight = this.dfs(cur.left);
        let rightHeight = this.dfs(cur.right);
        this.res = Math.max(this.res, leftHeight+rightHeight);
        return 1+Math.max(leftHeight, rightHeight);
    }
}
