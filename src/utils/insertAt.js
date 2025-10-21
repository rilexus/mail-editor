export function insertAt(arr, index, value) {
  const i = index < 0 ? arr.length + index : index;
  const pos = Math.max(0, Math.min(i, arr.length));
  return [...arr.slice(0, pos), value, ...arr.slice(pos)];
}
