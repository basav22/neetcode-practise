
// group anagrams
function groupAnagrams_old(strs) {
    let map = new Map();
    for(let str of strs) {
        let counts = Array(26).fill(0);
        for(let c of str)
            counts[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
        counts
        let key = counts.join('#'); // 🔑 convert to string

        if(!map.get(key))
            map.set(key, []);
        map.get(key).push(str);
    }
    return Array.from(map.values());
}

function groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        let counts = Array(26).fill(0);

        for (let c of str) {
            counts[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let key = counts.join('#'); // 🔑 convert to string

        if (!map.has(key)) {
            map.set(key, []);
        }
        str
        map.get(key).push(str);
    }

    return Array.from(map.values());
}

strs = ["act","pots","tops","cat","stop","hat"];
res = groupAnagrams(strs);
res