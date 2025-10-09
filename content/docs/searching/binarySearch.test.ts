import { expect, test } from 'vitest';
import { binarySearch } from './binarySearch';

test('binarySearch', () => {
  expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
});