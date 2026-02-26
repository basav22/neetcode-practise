
class Solution {
    res = 0;
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        if(!root) return 0;

        this.res = root.val;
        this.dfs(root);
        return this.res; 
    }

    // return maxsum without split
    dfs(root) {
        if(!root) return 0;

        let leftMax = this.dfs(root.left);
        let rightMax = this.dfs(root.right);
        
        leftMax = Math.max(leftMax, 0);
        rightMax = Math.max(rightMax, 0);

        this.res = Math.max(this.res , root.val + leftMax + rightMax);

        return root.val + Math.max(leftMax, rightMax);

    }
}