function isObject(val) {
  return val != null && typeof val === "object" && Array.isArray(val) === false;
}

const _set = (obj, keys, value) => {
  const lastKey = keys.length === 1;
  const [key, ...keyRest] = keys;
  const isNumber = (key) => Number.isInteger(Number(key));
  const isArray = (v) => Array.isArray(v);

  if (lastKey) {
    if (isNumber(key)) {
      if (isArray(obj)) {
        if (Number(key) >= obj.length) {
          obj.push(value);
          return [...obj];
        }

        obj[key] = value;
        return [...obj];
      }

      obj[key] = value;
      return { ...obj };
    }

    if (isArray(obj)) {
      return { [key]: value };
    }

    obj[key] = value;
    return { ...obj };
  }

  const v = obj[key];

  if (isNumber(key)) {
    if (Array.isArray(obj)) {
      const index = Number(key);
      obj[index] = _set(v, keyRest, value);
      return [...obj];
    }
  }

  if (!isNumber(key)) {
    if (Array.isArray(v)) {
      return { ...obj, [key]: _set(v, keyRest, value) };
    }
    if (!isObject(v)) {
      return { ...obj, [key]: _set({}, keyRest, value) };
    }
    if (isObject(v)) {
      return { ...obj, [key]: _set(v, keyRest, value) };
    }
  }

  return obj;
};

export const set = (obj, path, value) => _set(obj, path.split("."), value);
