
class Solution {
    goodNodes(root) {
        let res = this.dfs(root, -Infinity);
        return res;
    }

    dfs(cur, max) {
        if(!cur) return 0;
        let res = 0;

        if(cur.val >= max)
            res += 1;

        res += this.dfs(cur.left, Math.max(max, cur.val));
        res += this.dfs(cur.right, Math.max(max, cur.val));

        return res;
    }

}