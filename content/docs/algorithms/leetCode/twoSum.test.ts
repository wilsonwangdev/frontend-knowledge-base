import { expect, test, describe } from 'vitest';
import { twoSum } from './twoSum';

describe('twoSum', () => {
  test('should find pair at the beginning', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('should find pair in the middle', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('should handle duplicate numbers', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test('should find pair at the end', () => {
    expect(twoSum([1, 2, 3, 4, 5], 9)).toEqual([3, 4]);
  });

  test('should find pair with negative numbers', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  test('should find pair with mixed positive and negative', () => {
    expect(twoSum([5, -3, 2, 8], 5)).toEqual([1, 3]);
  });

  test('should find pair with zero', () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });

  test('should return undefined when no pair exists', () => {
    expect(twoSum([1, 2, 3], 10)).toBeUndefined();
  });

  test('should handle large array', () => {
    expect(twoSum([1, 5, 3, 7, 9, 2, 4, 6, 8], 15)).toEqual([4, 7]);
  });

  test('should find pair when complement appears later', () => {
    expect(twoSum([1, 3, 4, 2], 6)).toEqual([2, 3]);
  });
});
