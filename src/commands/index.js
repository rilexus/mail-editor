import { removeAt } from "../utils/removeAt";
import { insertAt } from "../utils/insertAt";
import { set } from "../utils/set";
import { remove } from "../utils/remove";
import { Command } from "./Command";
import { get } from "../utils/get";

export const removeItemCommand = (item) => {
  return new Command(
    (state, setState) => {
      const isSelected = state.selectedComponent?.path === item.path;

      setState((state) => {
        return {
          ...state,
          layout: remove(state.layout, item.path),
          ...(isSelected
            ? {
                selectedComponent: null,
              }
            : {}),
        };
      });
    },
    () => {}
  );
};

export const selectTemplateCommand = ({ name }) => {
  return new Command(
    (state, setState) => {
      setState((state) => {
        return {
          ...state,
          selectedTemplate: name,
        };
      });
    },
    () => {}
  );
};

export const setItemStyleCommend = (item, style) => {
  return new Command(
    (state, setState) => {
      item.props.style = style;
      setState((state) => {
        return {
          ...state,
          layout: set(state.layout, item.path, item),
        };
      });
    },
    () => {}
  );
};

export const setItemAttributesCommand = (item, attributes) => {
  return new Command(
    (state, setState) => {
      item.attributes = { ...attributes };

      setState((state) => {
        return {
          ...state,
          layout: set(state.layout, item.path, item),
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
      };
    });
  });
};

export const selectItemCommand = (item) => {
  return new Command(
    (state, setState) => {
      setState((s) => ({
        ...s,
        selectedComponent: { ...item },
      }));
    },
    () => {}
  );
};

export const dropItemCommand = (dropArea, { path }) => {
  return new Command(
    (state, setState) => {
      const droppedItemPath = path.split(".");

      const item = get(state.layout, path);

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
