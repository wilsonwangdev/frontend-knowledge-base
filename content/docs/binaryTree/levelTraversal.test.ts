import { expect, test, describe } from 'vitest';
import { levelTraversals } from './levelTraversal';

import { TreeNode } from './TreeNode';

describe('levelTraversals', () => {
  test('should traverse a balanced tree', () => {
    const root = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    );
    expect(levelTraversals(root)).toEqual([[3], [9, 20], [15, 7]]);
  });

  test('should return empty array for null root', () => {
    expect(levelTraversals(null)).toEqual([]);
  });

  test('should handle single node tree', () => {
    const root = new TreeNode(1);
    expect(levelTraversals(root)).toEqual([[1]]);
  });

  test('should handle tree with only left children', () => {
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
    expect(levelTraversals(root)).toEqual([[1], [2], [3]]);
  });

  test('should handle tree with only right children', () => {
    const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
    expect(levelTraversals(root)).toEqual([[1], [2], [3]]);
  });

  test('should handle complete binary tree', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6), new TreeNode(7))
    );
    expect(levelTraversals(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
  });

  test('should handle tree with mixed null children', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), null),
      new TreeNode(3, null, new TreeNode(5))
    );
    expect(levelTraversals(root)).toEqual([[1], [2, 3], [4, 5]]);
  });

  test('should handle tree with node value of 0', () => {
    const root = new TreeNode(0, new TreeNode(1), new TreeNode(2));
    expect(levelTraversals(root)).toEqual([[0], [1, 2]]);
  });
});
