import { expect, test, describe } from 'vitest';
import { LRUCache } from './LRUCache';

describe('LRUCache', () => {
  test('should initialize with given capacity', () => {
    const cache = new LRUCache(2);
    expect(cache).toBeDefined();
  });

  test('should return -1 for non-existent key', () => {
    const cache = new LRUCache(2);
    expect(cache.get(1)).toBe(-1);
  });

  test('should store and retrieve a value', () => {
    const cache = new LRUCache(2);
    cache.put(1, 100);
    expect(cache.get(1)).toBe(100);
  });

  test('should update existing key and move to end', () => {
    const cache = new LRUCache(2);
    cache.put(1, 100);
    cache.put(2, 200);
    cache.put(1, 150); // Update key 1
    expect(cache.get(1)).toBe(150);
  });

  test('should evict least recently used item when capacity exceeded', () => {
    const cache = new LRUCache(2);
    cache.put(1, 100);
    cache.put(2, 200);
    cache.put(3, 300); // Should evict key 1
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(200);
    expect(cache.get(3)).toBe(300);
  });

  test('should move accessed item to end (most recently used)', () => {
    const cache = new LRUCache(2);
    cache.put(1, 100);
    cache.put(2, 200);
    cache.get(1); // Access key 1, making it most recently used
    cache.put(3, 300); // Should evict key 2, not key 1
    expect(cache.get(1)).toBe(100);
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(3)).toBe(300);
  });

  test('should handle capacity of 1', () => {
    const cache = new LRUCache(1);
    cache.put(1, 100);
    expect(cache.get(1)).toBe(100);
    cache.put(2, 200); // Should evict key 1
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(200);
  });

  test('should handle multiple updates to same key', () => {
    const cache = new LRUCache(2);
    cache.put(1, 100);
    cache.put(1, 200);
    cache.put(1, 300);
    expect(cache.get(1)).toBe(300);
  });

  test('should handle sequence of operations', () => {
    const cache = new LRUCache(3);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(3, 3);
    expect(cache.get(1)).toBe(1);
    cache.put(4, 4); // Evicts key 2
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
    expect(cache.get(1)).toBe(1);
  });

  test('should handle get on non-existent key without affecting cache', () => {
    const cache = new LRUCache(2);
    cache.put(1, 100);
    cache.put(2, 200);
    expect(cache.get(3)).toBe(-1);
    expect(cache.get(1)).toBe(100);
    expect(cache.get(2)).toBe(200);
  });

  test('should evict first key when all keys are equally old', () => {
    const cache = new LRUCache(3);
    cache.put(1, 100);
    cache.put(2, 200);
    cache.put(3, 300);
    cache.put(4, 400); // Should evict key 1 (first inserted)
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(200);
  });

  test('should handle zero values', () => {
    const cache = new LRUCache(2);
    cache.put(1, 0);
    expect(cache.get(1)).toBe(0);
  });

  test('should handle negative values', () => {
    const cache = new LRUCache(2);
    cache.put(1, -100);
    expect(cache.get(1)).toBe(-100);
  });
});
