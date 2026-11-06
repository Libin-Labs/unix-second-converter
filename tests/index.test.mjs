import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('converts epoch start', () => {
  assert.equal(api.toUnixSeconds('1970-01-01T00:00:00Z'), 0);
});
test('converts one second', () => {
  assert.equal(api.toUnixSeconds('1970-01-01T00:00:01Z'), 1);
});
test('round trips timestamp', () => {
  assert.equal(
    api.fromUnixSeconds(api.toUnixSeconds('2024-02-29T12:30:00Z')),
    '2024-02-29T12:30:00.000Z',
  );
});
test('supports milliseconds as fraction', () => {
  assert.equal(api.toUnixSeconds('1970-01-01T00:00:00.500Z'), 0.5);
});
test('rejects no UTC marker', () => {
  assert.throws(() => api.toUnixSeconds('2024-01-01T00:00:00'), RangeError);
});
test('rejects invalid timestamp', () => {
  assert.throws(() => api.toUnixSeconds('not a dateZ'), RangeError);
});
