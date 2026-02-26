
class Codec {
    serialize(root) {
        let arr = [];
        this.dfs(root, arr);
        return arr.join(',');
    }

    dfs(root, arr) {
        if(!root) {
            arr.push('N');
            return;
        }

        arr.push(root.val);

        this.dfs(root.left, arr);
        this.dfs(root.right, arr);
    }

    deserialize(data) {
        let vals = data.split(',');
        let i = 0;
        
        function buildtree(vals) {
            if(vals[i] == 'N') {
                i+=1;
                return null;
            }

            let root = new TreeNode(vals[i]);
            
            i+=1;
            root.left = buildtree(vals);
            root.right = buildtree(vals);

            return root;
        }

        return buildtree(vals, 0);
    }
}