import { TreeNode } from './TreeNode';

export function levelTraversals(root: TreeNode | null): number[][] {
  if (!root) return [];
  let res = [];
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    let level = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node) {
        level.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    res.push(level);
  }
  return res;
}
