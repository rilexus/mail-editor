import { removeAt } from "../utils/removeAt";
import { insertAt } from "../utils/insertAt";
import { set } from "../utils/set";
import { remove } from "../utils/remove";
import { Command } from "./Command";
import { get } from "../utils/get";

export const removeItemCommand = (item) => {
  return new Command(
    (state, setState) => {
      setState((state) => {
        return {
          ...state,
          layout: remove(state.layout, item.path),
        };
      });
    },
    () => {}
  );
};

export const deselectItemCommand = () => {
  return new Command((state, setState) => {
    setState((state) => {
      return {
        ...state,
        selectedComponent: null,
        selectedComponentPath: null,
      };
    });
  });
};

export const selectItemCommand = (path) => {
  return new Command(
    (state, setState) => {
      const selectedComponent = get(state.layout, path);

      setState((s) => ({
        ...s,
        selectedComponent,
        selectedComponentPath: path,
      }));
    },
    () => {}
  );
};

export const dropItemCommand = (dropArea, item) => {
  return new Command(
    (state, setState) => {
      const droppedItemPath = item.path.split(".");
      const droppedItemIndex = Number(
        droppedItemPath[droppedItemPath.length - 1]
      );
      const droppedItemContainerPath = [...droppedItemPath]
        .slice(0, droppedItemPath.length - 1)
        .join(".");

      const dropAreaPath = dropArea.path.split(".");
      const droppedAreaContainerPath = [...dropAreaPath]
        .slice(0, dropAreaPath.length - 1)
        .join(".");

      let newChildren = get(state.layout, droppedAreaContainerPath);

      const dropAreaIndex = Number(dropAreaPath[dropAreaPath.length - 1]);

      if (
        /* item is being reordered in the same children array (same level) */
        droppedAreaContainerPath === droppedItemContainerPath
      ) {
        // remove dropped item from the children array
        newChildren = removeAt(newChildren, droppedItemIndex);

        // insert item depending from where it was dragged
        if (dropAreaIndex > droppedItemIndex) {
          // dragged from top to bottom
          newChildren = insertAt(newChildren, dropAreaIndex - 1, { ...item });
        }

        if (dropAreaIndex <= droppedItemIndex) {
          // dragged from the top
          newChildren = insertAt(newChildren, dropAreaIndex, { ...item });
        }
      } else {
        // new item dropped to the canvas in between other items
        // just insert
        newChildren = insertAt(newChildren, dropAreaIndex, { ...item });
      }

      dropAreaPath.pop(/* mutates */);
      setState((s) => {
        return {
          ...s,
          layout: set(s.layout, dropAreaPath.join("."), newChildren),
        };
      });
    },
    (setState) => {}
  );
};
