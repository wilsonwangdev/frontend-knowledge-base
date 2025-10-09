import { expect, test } from 'vitest';
import { levelTraversals } from './levelTraversal';

import { TreeNode } from './TreeNode';
test('levelTraversals', () => {
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );
  expect(levelTraversals(root)).toEqual([[3], [9, 20], [15, 7]]);
});
