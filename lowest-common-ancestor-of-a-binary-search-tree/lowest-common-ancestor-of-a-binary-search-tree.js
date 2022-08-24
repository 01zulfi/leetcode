/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const lowestCommonAncestor = function (root, p, q) {
  const pAncestors = findNodeAncestors(p, root);
  const qAncestors = findNodeAncestors(q, root);

  const commonAncestors = intersectionOfNodes(pAncestors, qAncestors);

  return commonAncestors[commonAncestors.length - 1];
};

const findNodeAncestors = (givenNode, pointerNode, ancestors = []) => {
  if (pointerNode === null || pointerNode.val === givenNode.val) {
    ancestors.push(givenNode);
    return ancestors;
  }

  if (pointerNode.val <= givenNode.val) {
    ancestors.push(pointerNode);
    return findNodeAncestors(givenNode, pointerNode.right, ancestors);
  }

  ancestors.push(pointerNode);
  return findNodeAncestors(givenNode, pointerNode.left, ancestors);
};

const intersectionOfNodes = (arrayOne, arrayTwo) => {
  const unique = [];
  const hashArrayOne = {};

  arrayOne.forEach((el) => {
    hashArrayOne[el.val] = el.val;
  });

  arrayTwo.forEach((el) => {
    if (hashArrayOne[el.val]) {
      unique.push(el);
    }
  });

  return unique;
};

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/discuss/2466160/javascript-oror-Recursion
// const lowestCommonAncestor = function (root, p, q) {
//   if (root === null) return null;

//   if (root.val < p.val && root.val < q.val) {
//     return lowestCommonAncestor(root.right, p, q);
//   }

//   if (root.val > p.val && root.val > q.val) {
//     return lowestCommonAncestor(root.left, p, q);
//   }

//   return root;
// };
