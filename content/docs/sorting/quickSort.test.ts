import { expect, test } from 'vitest';
import { quickSort } from './quickSort';

test('quickSort', () => {
  const arr = [5, 3, 8, 4, 2];
  const res = quickSort(arr);
  expect(res).toEqual([2, 3, 4, 5, 8]);
});
