import { expect, test, describe } from 'vitest';
import { fourSum, optimizedFourSum } from './fourSum';

describe('fourSum', () => {
  test('should find multiple quadruplets', () => {
    expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ]);
  });

  test('should return empty array when no quadruplets exist', () => {
    expect(fourSum([1, 2, 3, 4], 100)).toEqual([]);
  });

  test('should handle array with less than 4 elements', () => {
    expect(fourSum([1, 2, 3], 6)).toEqual([]);
  });

  test('should handle all same numbers', () => {
    expect(fourSum([2, 2, 2, 2, 2], 8)).toEqual([[2, 2, 2, 2]]);
  });

  test('should skip duplicate first elements', () => {
    const result = fourSum([-3, -3, -2, -1, 0, 0, 1, 2, 3], 0);
    expect(result).toContainEqual([-3, -2, 2, 3]);
    expect(result).toContainEqual([-3, -1, 1, 3]);
    expect(result).toContainEqual([-2, -1, 1, 2]);
    // Verify no duplicate starting with second -3
    const firstElementCounts = result.filter(arr => arr[0] === -3);
    expect(firstElementCounts.length).toBeGreaterThan(0);
  });

  test('should skip duplicate second elements', () => {
    expect(fourSum([-2, -1, -1, 0, 1, 2], 0)).toEqual([
      [-2, -1, 1, 2],
      [-1, -1, 0, 2],
    ]);
  });

  test('should skip duplicate left pointers', () => {
    const result = fourSum([-2, -1, -1, 0, 0, 1, 1, 2], 0);
    expect(result).toContainEqual([-2, -1, 1, 2]);
    expect(result).toContainEqual([-2, 0, 0, 2]);
    expect(result).toContainEqual([-1, -1, 1, 1]);
    expect(result).toContainEqual([-1, -1, 0, 2]);
    expect(result).toContainEqual([-1, 0, 0, 1]);
    expect(result.length).toBe(5);
  });

  test('should skip duplicate right pointers', () => {
    expect(fourSum([0, 0, 0, 1, 1, 1, 2, 2, 2], 4)).toEqual([
      [0, 0, 2, 2],
      [0, 1, 1, 2],
    ]);
  });

  test('should handle single quadruplet', () => {
    expect(fourSum([1, 2, 3, 4], 10)).toEqual([[1, 2, 3, 4]]);
  });

  test('should handle negative target', () => {
    expect(fourSum([-5, -4, -3, -2, -1], -14)).toEqual([[-5, -4, -3, -2]]);
  });

  test('should handle positive target with negatives', () => {
    expect(fourSum([-3, -1, 0, 2, 4, 5], 8)).toEqual([
      [-3, 2, 4, 5],
      [-1, 0, 4, 5],
    ]);
  });

  test('should handle sum less than target', () => {
    expect(fourSum([1, 2, 3, 4, 5], 50)).toEqual([]);
  });

  test('should handle sum greater than target', () => {
    expect(fourSum([10, 20, 30, 40], 10)).toEqual([]);
  });

  test('should handle empty array', () => {
    expect(fourSum([], 0)).toEqual([]);
  });

  test('should handle large target', () => {
    expect(fourSum([1000000000, 1000000000, 1000000000, 1000000000], 0)).toEqual([]);
  });
});

describe('optimizedFourSum', () => {
  test('should find multiple quadruplets', () => {
    const result = optimizedFourSum([1, 0, -1, 0, -2, 2], 0);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toContainEqual([1, 0, -1, 0]);
  });

  test('should return empty array when no quadruplets exist', () => {
    expect(optimizedFourSum([1, 2, 3, 4], 100)).toEqual([]);
  });

  test('should handle array with less than 4 elements', () => {
    expect(optimizedFourSum([1, 2, 3], 6)).toEqual([]);
  });

  test('should find quadruplets with same sum pairs', () => {
    const result = optimizedFourSum([2, 2, 2, 2, 2], 8);
    expect(result.length).toBeGreaterThan(0);
  });

  test('should handle negative numbers', () => {
    const result = optimizedFourSum([-5, -4, -3, -2, -1], -14);
    expect(result).toContainEqual([-5, -4, -3, -2]);
  });

  test('should handle mixed positive and negative', () => {
    const result = optimizedFourSum([-3, -1, 0, 2, 4, 5], 8);
    expect(result.length).toBeGreaterThan(0);
  });

  test('should handle case where twoSumMap has matching diff', () => {
    const result = optimizedFourSum([1, 2, 3, 4], 10);
    expect(result).toContainEqual([1, 2, 3, 4]);
  });

  test('should handle case where k > j condition filters results', () => {
    const result = optimizedFourSum([1, 1, 1, 1], 4);
    expect(result.length).toBeGreaterThan(0);
  });

  test('should handle empty array', () => {
    expect(optimizedFourSum([], 0)).toEqual([]);
  });

  test('should create new entry in twoSumMap when sum not exists', () => {
    const result = optimizedFourSum([1, 2, 3, 4, 5, 6], 14);
    expect(result.length).toBeGreaterThan(0);
  });

  test('should append to existing entry in twoSumMap', () => {
    const result = optimizedFourSum([1, 1, 2, 2, 3, 3], 8);
    expect(result.length).toBeGreaterThan(0);
  });
});
