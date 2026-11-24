import assert from "node:assert/strict";
import { test } from "node:test";
import { nearestPosition, orbitStyle, wrapIndex } from "../src/lib/artist-orbit.ts";

test("previous from the first artist wraps to the last; next returns to the first", () => {
  assert.equal(wrapIndex(-1, 9), 8);
  assert.equal(wrapIndex(9, 9), 0);
  assert.equal(wrapIndex(-19, 9), 8);
});

test("selecting across the boundary moves one place instead of a whole circuit", () => {
  assert.equal(nearestPosition(0, 8, 9), -1);
  assert.equal(nearestPosition(8, 0, 9), 9);
  assert.equal(nearestPosition(-1, 0, 9), 0);
});

test("every artist remains selectable by the shortest path after repeated turns", () => {
  for (let current = -30; current <= 30; current++) {
    for (let target = 0; target < 9; target++) {
      const next = nearestPosition(current, target, 9);
      assert.equal(wrapIndex(next, 9), target);
      assert.ok(Math.abs(next - current) <= 4);
    }
  }
});

test("the selected portrait stays at the front and all nine have distinct positions", () => {
  const styles = Array.from({ length: 9 }, (_, index) => orbitStyle(index, 3, 9));
  assert.equal(styles[3].zIndex, 100);
  assert.equal(styles[3].opacity, 1);
  assert.equal(new Set(styles.map((style) => style.transform)).size, 9);
  assert.ok(styles.every((style) => style.opacity >= 0.4 && style.opacity <= 1));
});

test("orbit geometry closes seamlessly after a complete turn", () => {
  for (let index = 0; index < 9; index++) {
    const first = orbitStyle(index, 0, 9);
    const next = orbitStyle(index, 9, 9);
    assert.equal(first.zIndex, next.zIndex);
    assert.ok(Math.abs(first.opacity - next.opacity) < 1e-10);
  }
});
