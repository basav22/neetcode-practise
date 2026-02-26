
function mergeKLists(lists) {
    if(lists.length==0 ) return [];
    while(lists.length>1) {
        let mergedList = [];
        for(let i=0; i<lists.length;i+=2) {
            let l1 = lists[i];
            let l2 = i+1 < lists.length ? lists[i+1]: null;
            mergedList.push(merge(l1, l2));
        }
        lists = mergedList;
    }
    return lists[0];
}

function merge(l1, l2) {
    let dummy = new ListNode(0);
    let tail = dummy;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        }
        else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    if(l1)
        tail.next = l1;
    if(l2)
        tail.next = l2;

    return dummy.next;
}