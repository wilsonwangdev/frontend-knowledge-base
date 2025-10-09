import { expect, test, describe } from 'vitest';
import { threeSum } from './threeSum';

describe('threeSum', () => {
  test('should find multiple triplets', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test('should return empty array when no triplets exist', () => {
    expect(threeSum([1, 2, 3])).toEqual([]);
  });

  test('should handle array with less than 3 elements', () => {
    expect(threeSum([0, 1])).toEqual([]);
  });

  test('should handle all zeros', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  test('should skip duplicate first elements', () => {
    expect(threeSum([-2, 0, 0, 2, 2])).toEqual([[-2, 0, 2]]);
  });

  test('should skip duplicate left pointers', () => {
    expect(threeSum([-4, -1, -1, 0, 1, 2])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test('should skip duplicate right pointers', () => {
    expect(threeSum([-2, 0, 1, 1, 2])).toEqual([
      [-2, 0, 2],
      [-2, 1, 1],
    ]);
  });

  test('should handle single triplet', () => {
    expect(threeSum([-1, 0, 1])).toEqual([[-1, 0, 1]]);
  });

  test('should handle negative numbers only', () => {
    expect(threeSum([-5, -4, -3, -2, -1])).toEqual([]);
  });

  test('should handle positive numbers only', () => {
    expect(threeSum([1, 2, 3, 4, 5])).toEqual([]);
  });

  test('should handle mixed with multiple solutions', () => {
    expect(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])).toEqual(
      [
        [-4, -2, 6],
        [-4, 0, 4],
        [-4, 1, 3],
        [-4, 2, 2],
        [-2, -2, 4],
        [-2, 0, 2],
      ]
    );
  });

  test('should handle array where sum is less than zero initially', () => {
    expect(threeSum([-3, -1, 0, 1])).toEqual([[-1, 0, 1]]);
  });

  test('should handle array where sum is greater than zero', () => {
    expect(threeSum([-1, 0, 2, 3])).toEqual([]);
  });

  test('should handle empty array', () => {
    expect(threeSum([])).toEqual([]);
  });
});
