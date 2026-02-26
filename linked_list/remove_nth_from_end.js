
function removeNthFromEnd(head, n) {
    let l=head, r=head;
    let dummy = new ListNode();
    dummy.next = head;

    l = dummy;

    while(n>0 && r) {
        r = r.next;
        n-=1;
    }

    while(r) {
        l=l.next;
        r = r.next;
    }
    l.next = l.next.next;
    return dummy.next;
}