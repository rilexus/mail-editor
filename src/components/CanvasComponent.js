import { getComponent } from "./getElement";
import styled from "styled-components";
import { useOnClickOutside } from "usehooks-ts";
import { Fragment, useRef } from "react";
import { DropArea } from "./DropArea";
import { removeAt } from "../utils/removeAt";
import { insertAt } from "../utils/insertAt";
import { useDrag } from "react-dnd";
import { mergeRefs } from "react-merge-refs";

const Controls = styled.div`
  background: rgba(99, 102, 241, 0.06);
  position: absolute;
  inset: 0;
`;

const Hover = styled.div`
  &:hover {
    border: 3px solid #6366f1;
    border-radius: 8px;

    ${Controls} {
      display: inline;
    }
  }
  ${Controls} {
    display: none;
  }
`;

export const CanvasComponent = ({
  path,
  data,
  onDrop,
  onDelete,
  onClick,
  onClickOutside,
  ...props
}) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(
    () => ({
      // "type" is required. It is used by the "accept" specification of drop targets.
      type: data.name,
      item: data,
      // The collect function utilizes a "monitor" instance (see the Overview for what this is)
      // to pull important pieces of state from the DnD system.
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [data]
  );

  const ref = useRef(null);
  const Component = getComponent(data);

  useOnClickOutside(ref, () => onClickOutside(path));

  const { accept } = data;

  return (
    <Hover
      ref={mergeRefs([ref, drag])}
      style={{
        position: "relative",
      }}
      onClick={() => onClick(path)}
    >
      {/*<Controls>*/}
      {/*  <button onClick={() => onDelete(path, data)}>delete</button>*/}
      {/*</Controls>*/}

      <Component {...props} data={data} onDrop={onDrop} path={path}>
        <DropArea
          data={{
            path: `${path}.children.0`,
          }}
          onDrop={(dropArea, item) => {
            let newChildren = [...data.children];

            console.log(dropArea, item);

            const droppedItemPath = item.path.split(".");
            const droppedItemContainerPath = [...droppedItemPath]
              .slice(0, droppedItemPath.length - 1)
              .join(".");

            const dropAreaPath = dropArea.path.split(".");
            const droppedAreaContainerPath = [...dropAreaPath]
              .slice(0, dropAreaPath.length - 1)
              .join(".");

            const dropAreaIndex = Number(dropAreaPath[dropAreaPath.length - 1]);

            if (
              /* item is being reordered in the same children array */
              droppedAreaContainerPath === droppedItemContainerPath
            ) {
              const droppedItemIndex = Number(
                droppedItemPath[droppedItemPath.length - 1]
              );
              newChildren = removeAt(newChildren, droppedItemIndex);
            }

            onDrop(dropArea, insertAt(newChildren, dropAreaIndex, item));
          }}
          accept={accept}
        />
        {data.children.map((child, i) => {
          return (
            <Fragment key={`${child.name}.children.${i}`}>
              <div
                style={{
                  paddingLeft: "1rem",
                }}
              >
                <CanvasComponent
                  onDelete={onDelete}
                  onClickOutside={onClickOutside}
                  onClick={onClick}
                  key={i}
                  data={{ ...child, path: `${path}.children.${i}` }}
                  onDrop={onDrop}
                  path={`${path}.children.${i}`}
                />
              </div>
              <DropArea
                data={{
                  path: `${path}.children.${i + 1}`,
                }}
                onDrop={(dropArea, item) => {
                  let newChildren = [...data.children];

                  const droppedItemPath = item.path.split(".");
                  const droppedItemIndex =
                    droppedItemPath[droppedItemPath.length - 1];
                  const droppedItemContainerPath = [...droppedItemPath]
                    .slice(0, droppedItemPath.length - 1)
                    .join(".");

                  const dropAreaPath = dropArea.path.split(".");
                  const droppedAreaContainerPath = [...dropAreaPath]
                    .slice(0, dropAreaPath.length - 1)
                    .join(".");

                  const dropAreaIndex = Number(
                    dropAreaPath[dropAreaPath.length - 1]
                  );

                  if (
                    /* item is being reordered in the same children array (same level) */
                    droppedAreaContainerPath === droppedItemContainerPath
                  ) {
                    newChildren = removeAt(newChildren, droppedItemIndex);

                    if (dropAreaIndex > droppedItemIndex) {
                      newChildren = insertAt(
                        newChildren,
                        dropAreaIndex - 1,
                        item
                      );
                    }

                    if (dropAreaIndex <= droppedItemIndex) {
                      newChildren = insertAt(newChildren, dropAreaIndex, item);
                    }

                    onDrop(dropArea, newChildren);
                    return;
                  }

                  onDrop(dropArea, insertAt(newChildren, dropAreaIndex, item));

                  // onDrop(
                  //   dropArea,
                  //   insertAt(data.children, i + 1, {
                  //     ...item,
                  //     path: `${path}.children.${i + 1}`,
                  //   })
                  // );
                }}
                accept={accept}
              />
            </Fragment>
          );
        })}
      </Component>
    </Hover>
  );
};
