
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        # 1->2->3
        # 6->7->1
        dummy = ListNode(0)
        cur = dummy
        carry = 0
        while l1 or l2 or carry:
            sum = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carry
            carry = 1 if sum >= 10 else 0
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next
            cur.next = ListNode(sum % 10)
            cur = cur.next
        return dummy.next