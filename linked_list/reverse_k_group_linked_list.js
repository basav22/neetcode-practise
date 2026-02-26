
function reverseKGroup(head, k) {
    let dummy = new ListNode(0, head);
    let groupPrev = dummy;


    while(1) {
        // traverse K nodes
        let kth = getKth(groupPrev, k);
        if(!kth)
            break;
        let nextGroup = kth.next;
        // reverse 
        let [prev, cur] = [nextGroup, groupPrev.next];
        while(cur != nextGroup) {
            let tmp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = tmp;
        }
        // how this will stop at Kth ???
        let tmp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = tmp;
    }
    return dummy.next;
}
function getKth(cur, k) {
    while(k>0 && cur) {
        cur = cur.next;
        k-=1;
    }
    return cur;
}