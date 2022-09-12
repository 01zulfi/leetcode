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
# @return {Integer}

def diameter_of_binary_tree(root)
  return 0 if root.nil?

  sum_of_heights = height(root.left) + height(root.right)
  left_diameter = diameter_of_binary_tree(root.left)
  right_diameter = diameter_of_binary_tree(root.right)

  [sum_of_heights, left_diameter, right_diameter].max
end

def height(root)
  # no idea why it works with 0 instead of -1
  return 0 if root.nil?

  left = height(root.left)
  right = height(root.right)

  [left, right].max + 1
end
