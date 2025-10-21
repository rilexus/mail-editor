import { set } from "../set";

export const handleAddComponent = (path, item) => {
  return (layout) => {
    return set(layout, path, item);
  };
};
