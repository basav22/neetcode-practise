

function hasCycle(head) {
    let slow  = head, fast = head;

    while(slow) {
        slow = slow.next;
        if(fast && fast.next)
            fast = fast.next.next;
        else
            break;

        if(slow == fast) // cycle detected
            return true;
    }
    return false;
}