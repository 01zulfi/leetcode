# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}

def reverse_list(head)
  current = nil

  until head.nil?
    next_node = head.next
    head.next = current
    current = head
    head = next_node
  end

  current
end
