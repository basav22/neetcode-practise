
class Solution {
    max_diff = 0;
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        
        return this.dfs(root)[0];
    }

    dfs(cur) {
        if(!cur) return [true,0];

        let left = dfs(cur.left);
        let right = dfs(cur.right);

        let balanced = left[0] && right[0] && (Math.abs(right[1] - left[1]) <= 1);
        // this.max_diff = Math.max(this.max_diff, );
        
        return [balanced, 1+Math.max(left[1], right[1])];
    }
}