
function reorderList(head) {
    // find 2 splits of given list
    let slow = head, fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse second list
    let second = slow.next;
    slow.next = null;
    let prev = null;
    while(second) {
        let tmp = second.next;
        second.next = prev;
        prev = second;
        second = tmp;
    }
    second = prev;

    // merge
    let l = head, r = second;
    while(r) {
        let tmp1 = l.next, tmp2 = r.next;
        l.next = r;
        r.next = tmp1;
        r= tmp2;
    }
}