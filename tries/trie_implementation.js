class TrieNode {
    constructor(){
        this.children = {};
        this.isWordFinish = false;
    }
}
class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    
    insert(word) {
        let cur = this.root;
        for(let c of word) {
            if(!cur.children[c])
                cur.children[c] = new TrieNode();
            cur = cur.children[c];
        }
        cur.isWordFinish = true;
    }

    
    search(word) {
        let cur = this.root;
        for(let c of word) {
            if(! cur.children[c])
                return false;
            cur = cur.children[c];
        }
        return cur.isWordFinish;
    }

    startsWith(prefix) {
        let cur = this.root;
        for(let c of prefix) {
            if(! cur.children[c])
                return false;
            cur = cur.children[c];
        }
        return true;
    }
}
