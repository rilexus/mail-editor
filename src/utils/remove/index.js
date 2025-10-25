const toKey = (s) => (/^\d+$/.test(s) ? Number(s) : s);

export function remove(o, path) {
  if (o == null || typeof path !== "string" || !path) return o;
  const parts = path.split(".").filter(Boolean).map(toKey);

  function rec(target, idx) {
    if (idx === parts.length) return target;

    if (target == null || typeof target !== "object") return target;
    const k = parts[idx];

    if (idx === parts.length - 1) {
      if (Array.isArray(target) && typeof k === "number") {
        if (k < 0 || k >= target.length) return target;
        return [...target.slice(0, k), ...target.slice(k + 1)];
      }
      if (!Object.prototype.hasOwnProperty.call(target, k)) return target;
      const copy = Array.isArray(target) ? target.slice() : { ...target };
      delete copy[k];
      return copy;
    }

    const next = rec(target[k], idx + 1);
    if (next === target[k]) return target; // no change
    const copy = Array.isArray(target) ? target.slice() : { ...target };
    copy[k] = next;
    return copy;
  }

  return rec(o, 0);
}
