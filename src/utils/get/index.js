export const get = (obj, path) => {
  const steps = typeof path === "string" ? path.split(".") : path;
  let v = obj;
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    if (v === null) {
      return undefined;
    }

    if (Array.isArray(v)) {
      const index = Number(step);
      if (isNaN(index)) {
        v = null;
      }

      if (v.length - 1 <= index) {
        v = v[index];
        continue;
      }
    }

    if (step in v) {
      v = v[step];
    } else {
      return undefined;
    }
  }

  return v;
};
