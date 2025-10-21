export function removeAt(arr, index = 0) {
  const i = index < 0 ? arr.length + index : index;
  const pos = Math.max(0, Math.min(i, arr.length));
  if (pos >= arr.length) return [...arr];
  return [...arr.slice(0, pos), ...arr.slice(pos + 1)];
}
