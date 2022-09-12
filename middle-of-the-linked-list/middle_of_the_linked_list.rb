# frozen_string_literal: true

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

def middle_node(head)
  hare = head
  tortoise = head

  while hare&.next
    tortoise = tortoise.next
    hare = hare.next.next
  end

  tortoise
end
