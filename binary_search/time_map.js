
var TimeMap = function() {
    
    this.memo = new Map();
};
// key = "song1": "like" --- at t= 1;

TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.memo.has(key)) {
        this.memo.set(key, []);
    }
    
    // this.memo.set(key,Array(...(this.memo.get(key)) , [value, timestamp]));
        this.memo.get(key).push([value, timestamp]);

};
// [[10,1], [14,3]]

TimeMap.prototype.get = function(key, timestamp) {
    m = this.memo;
    m
    // console.log(m);
    let l = 0, r = this.memo.has(key) ? this.memo.get(key).length-1 : -1;
    let res = "";
    l
    r
    // do binary search
    while(l<=r) {
        let mid = l + parseInt((r-l)/2);
        mid
        let [v, t] = this.memo.get(key)[mid];
        // k
        v
        t
        timestamp
            // if time > timestamp
        if(t <= timestamp) {
            // if(key == k)
            res = v;
            // see in right part
            l = mid+1;
        } else {
            r = mid -1;
        }
    }
    return res;
};

let  timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
a= timeMap.get('foo',1);
a=timeMap.get("foo", 3); 

timeMap.set("foo", "bar2", 4);
a=timeMap.get("foo", 4);
a=timeMap.get("foo", 50); 
a

