
class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if(!preorder.length || !inorder.length)
            return null;

        let root = new TreeNode(preorder[0]);
        
        // works if nodes are unique
        let mid = inorder.findIndex(n => n == preorder[0]); 
        
        // 1..mid+1     
        root.left = this.buildTree(preorder.slice(1, mid+1), inorder.slice(null, mid));
        root.right = this.buildTree(preorder.slice(mid+1), inorder.slice(mid+1));
        return root;
    }
}