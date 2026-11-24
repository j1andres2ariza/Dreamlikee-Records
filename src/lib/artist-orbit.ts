const FULL_TURN = Math.PI * 2;

export function wrapIndex(position: number, count: number) {
  return ((position % count) + count) % count;
}

/** Take the shortest path when selecting a portrait on either side of the ring. */
export function nearestPosition(position: number, index: number, count: number) {
  let distance = index - wrapIndex(position, count);
  if (distance > count / 2) distance -= count;
  if (distance < -count / 2) distance += count;
  return position + distance;
}

/** Front-facing portraits travel along an ellipse instead of flipping with the ring. */
export function orbitStyle(index: number, position: number, count: number) {
  const angle = ((index - position) / count) * FULL_TURN;
  const depth = (Math.cos(angle) + 1) / 2;
  return {
    transform: `translate(-50%, -50%) translate3d(calc(var(--artist-radius) * ${Math.sin(angle).toFixed(5)}), ${(-110 + depth * 150).toFixed(2)}px, 0) scale(${(0.46 + depth * 0.54).toFixed(5)})`,
    opacity: 0.4 + depth * 0.6,
    filter: `brightness(${0.5 + depth * 0.5})`,
    zIndex: Math.round(depth * 100),
  };
}
