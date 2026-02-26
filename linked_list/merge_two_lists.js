

function mergeTwoLists(l1, l2) {
    // let [head1, head2] = [list1, list2];
    let dummy = new ListNode();
    let prev = dummy;
    // let resHead = null;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            prev.next = l1;
            prev = l1
            l1 = l1.next;
        } else {
            prev.next = l2;
            prev = l2;
            l2 = l2.next;
            
        }
    }

    if(l1) {
        prev.next = l1;
    }

    if(l2) {
        prev.next =  l2;
    }

    return dummy.next;
}