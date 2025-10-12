import { expect, test, describe } from 'vitest';
import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
  test('should find element in the middle', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  test('should return -1 when element not found', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  test('should find element at the beginning', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  test('should find element at the end', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  test('should handle single element array when found', () => {
    expect(binarySearch([5], 5)).toBe(0);
  });

  test('should handle single element array when not found', () => {
    expect(binarySearch([5], 3)).toBe(-1);
  });

  test('should handle empty array', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  test('should find element in left half', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 2)).toBe(1);
  });

  test('should find element in right half', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7], 6)).toBe(5);
  });

  test('should return -1 for target less than all elements', () => {
    expect(binarySearch([5, 10, 15, 20], 3)).toBe(-1);
  });

  test('should return -1 for target greater than all elements', () => {
    expect(binarySearch([5, 10, 15, 20], 25)).toBe(-1);
  });

  test('should handle two element array - find first', () => {
    expect(binarySearch([1, 2], 1)).toBe(0);
  });

  test('should handle two element array - find second', () => {
    expect(binarySearch([1, 2], 2)).toBe(1);
  });
});
