import { get } from "../get";

export const transform = (obj) => {
  return (templates) => {
    templates = templates.map((t) => t.replace(/\s/g, ""));
    templates = templates
      .map((t) => t.split(","))
      .flat()
      .filter((t) => t !== "");

    return templates.reduce((acc, t) => {
      const [key, path] = t.split(":");

      const isAndPath = path.includes("&&");
      const isOrPath = path.includes("||");

      if (isAndPath) {
        const andPaths = path.split("&&");

        const andValues = andPaths.map((path) => {
          if (path === "") return undefined;
          return get(obj, path.split("."));
        });

        return {
          ...acc,
          // Returns array of values
          [key]: andValues,
        };
      }

      if (isOrPath) {
        const orPaths = path.split("||");

        const orValues = orPaths.map((path) => {
          if (path === "") return undefined;
          return get(obj, path.split("."));
        });

        return {
          ...acc,
          // returns first existing value
          [key]: orValues.find((v) => !!v),
        };
      }

      return {
        ...acc,
        [key]: get(obj, path.split(".")),
      };
    }, {});
  };
};
