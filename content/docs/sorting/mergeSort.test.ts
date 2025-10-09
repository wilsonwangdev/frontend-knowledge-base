import { expect, test } from 'vitest';
import { mergeSort } from './mergeSort';

test('mergeSort', () => {
  const arr = [5, 2, 3, 1];
  const res = mergeSort(arr);
  expect(res).toEqual([1, 2, 3, 5]);
});