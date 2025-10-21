export const get = (obj, path) => {
  const steps = path;
  let v = obj;
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    if (v === null) {
      return undefined;
    }
    if (step in v) {
      v = v[step];
    } else {
      return undefined;
    }
  }
  return v;
};
