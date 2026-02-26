class TrieNode {
    constructor(){
        this.children = {};
        this.isWordFinish = false;
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    
    addWord(word) {
        let cur = this.root;
        for(let c of word) {
            if(!cur.children[c])
                cur.children[c] = new TrieNode();
            cur = cur.children[c];
        }
        cur.isWordFinish = true;
    }

    search(word) {
        function dfs(root, start) {
            let cur = root;
            for(let index = start; index<word.length; index++) {
                let c = word[index];
                if(c == '.') {
                    for(let child of Object.values(cur.children)) {
                        if(dfs(child, index +1))
                            return true;
                    }
                    return false;
                }
                else if(! cur.children[c])
                    return false;
                cur = cur.children[c];
            }
            return cur.isWordFinish;
        }

        return dfs(this.root, 0);
    }
}
