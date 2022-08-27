# frozen_string_literal: true

# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Boolean}
def is_balanced(root)
  return true if root.nil?

  left_height = height(root.left)
  right_height = height(root.right)

  left_balance = is_balanced(root.left)
  right_balance = is_balanced(root.right)

  return true if (left_height - right_height).abs <= 1 && left_balance && right_balance

  false
end

def height(root)
  return -1 if root.nil?

  left = height(root.left)
  right = height(root.right)

  [left, right].max + 1
end
