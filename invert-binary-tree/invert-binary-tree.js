/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const invertTree = function (root) {
  const nodes = traverseDFS(root);
  nodes.forEach((node) => {
    temp = node.left;
    node.left = node.right;
    node.right = temp;
  });
  return root;
};

const traverseDFS = (node, result = []) => {
  if (node === null) {
    return result;
  }

  result.push(node);
  traverseDFS(node.left, result);
  traverseDFS(node.right, result);

  return result;
};
