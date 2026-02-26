

function reverseList(head) {
    let cur = head;

    let pre = null;
    while(cur !=null) {
        let nxt = cur.next;
        cur.next = pre;

        cur = nxt;
        pre = cur;
    }

    return pre;
}