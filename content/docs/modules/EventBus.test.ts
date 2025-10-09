import { expect, test, vi, describe } from 'vitest';
import { EventBus } from './EventBus';

describe('EventBus', () => {
  test('should register and emit events', () => {
    const eventBus = new EventBus();
    const mockCallback = vi.fn();

    eventBus.on('test-event', mockCallback);
    eventBus.emit('test-event', 'arg1', 'arg2');

    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith('arg1', 'arg2');
  });

  test('should handle multiple callbacks for the same event', () => {
    const eventBus = new EventBus();
    const mockCallback1 = vi.fn();
    const mockCallback2 = vi.fn();

    eventBus.on('test-event', mockCallback1);
    eventBus.on('test-event', mockCallback2);
    eventBus.emit('test-event', 'data');

    expect(mockCallback1).toHaveBeenCalledTimes(1);
    expect(mockCallback1).toHaveBeenCalledWith('data');
    expect(mockCallback2).toHaveBeenCalledTimes(1);
    expect(mockCallback2).toHaveBeenCalledWith('data');
  });

  test('should not throw when emitting non-existent event', () => {
    const eventBus = new EventBus();

    expect(() => {
      eventBus.emit('non-existent-event');
    }).not.toThrow();
  });

  test('should remove specific callback with off', () => {
    const eventBus = new EventBus();
    const mockCallback1 = vi.fn();
    const mockCallback2 = vi.fn();

    eventBus.on('test-event', mockCallback1);
    eventBus.on('test-event', mockCallback2);
    eventBus.off('test-event', mockCallback1);
    eventBus.emit('test-event');

    expect(mockCallback1).not.toHaveBeenCalled();
    expect(mockCallback2).toHaveBeenCalledTimes(1);
  });

  test('should handle off for non-existent event', () => {
    const eventBus = new EventBus();
    const mockCallback = vi.fn();

    expect(() => {
      eventBus.off('non-existent-event', mockCallback);
    }).not.toThrow();
  });

  test('should execute once callback only one time', () => {
    const eventBus = new EventBus();
    const mockCallback = vi.fn();

    eventBus.once('test-event', mockCallback);
    eventBus.emit('test-event', 'first');
    eventBus.emit('test-event', 'second');

    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith('first');
  });

  test('should pass multiple arguments to once callback', () => {
    const eventBus = new EventBus();
    const mockCallback = vi.fn();

    eventBus.once('test-event', mockCallback);
    eventBus.emit('test-event', 'arg1', 'arg2', 'arg3');

    expect(mockCallback).toHaveBeenCalledWith('arg1', 'arg2', 'arg3');
  });

  test('should handle multiple events independently', () => {
    const eventBus = new EventBus();
    const mockCallback1 = vi.fn();
    const mockCallback2 = vi.fn();

    eventBus.on('event1', mockCallback1);
    eventBus.on('event2', mockCallback2);
    eventBus.emit('event1', 'data1');
    eventBus.emit('event2', 'data2');

    expect(mockCallback1).toHaveBeenCalledWith('data1');
    expect(mockCallback2).toHaveBeenCalledWith('data2');
  });

  test('should emit events with no arguments', () => {
    const eventBus = new EventBus();
    const mockCallback = vi.fn();

    eventBus.on('test-event', mockCallback);
    eventBus.emit('test-event');

    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith();
  });
});
