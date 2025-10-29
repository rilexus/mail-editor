import { getComponent } from "./getElement";
import styled from "styled-components";
import { useOnClickOutside } from "usehooks-ts";
import { Fragment, useEffect, useRef, useState } from "react";
import { DropArea } from "./DropArea";
import { useDrag } from "react-dnd";
import { mergeRefs } from "react-merge-refs";
import { useApplicationState } from "../providers/StateProvider";
import { dropItemCommand } from "../commands";
import { useOver } from "../hooks/useOver";
import { DragHandler } from "../ui/icons/DragHandler";

const Controls = styled.div`
  background: rgba(165, 167, 246, 0.06);
  position: absolute;
  inset: 0;
`;

const Hover = styled.div`
  ${({ $active }) => {
    return $active
      ? `
      border: 2px solid #6366f1;
      border-radius: 8px;

      & > ${Controls} {
        display: inline;
      }
      `
      : `& > ${Controls} {
          display: none;
        }`;
  }}
`;

export const CanvasComponent = ({
  path,
  item,
  onDrop,
  onDelete,
  onClick,
  onClickOutside,
  ...props
}) => {
  const selectedComponentPath = useApplicationState(
    ({ selectedComponentPath }) => selectedComponentPath
  );
  const run = useApplicationState(({ run }) => run);

  const isSelected = selectedComponentPath === path;

  const [_, drag, dragPreview] = useDrag(
    () => ({
      // "type" is required. It is used by the "accept" specification of drop targets.
      type: item.name,
      item: item,
      // The collect function utilizes a "monitor" instance (see the Overview for what this is)
      // to pull important pieces of state from the DnD system.
    }),
    [item]
  );

  const ref = useRef(null);

  const isHover = useOver(ref);

  const Component = getComponent(item);

  useOnClickOutside(ref, () => onClickOutside(path));

  const { accept, children } = item;

  return (
    <Hover
      ref={mergeRefs([ref, dragPreview])}
      $active={isHover || isSelected}
      style={{
        position: "relative",
      }}
      onClick={(e) => {
        // e.stopPropagation();
        onClick?.(path);
      }}
    >
      <Controls ref={drag}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            justifyContent: "end",
          }}
        >
          {/*<DragHandler ref={drag} />*/}
          <button
            onClick={(e) => {
              // e.stopPropagation();
              onDelete(item);
            }}
          >
            Delete
          </button>
        </div>
      </Controls>

      <Component {...props} item={item}>
        <DropArea
          data={{
            path: `${path}.children.0`,
          }}
          onDrop={(dropArea, item) => run(dropItemCommand(dropArea, item))}
          accept={accept}
        />
        {children.map((child, i) => {
          return (
            <div key={`${path}.children.${i}`} style={{ marginLeft: "20px" }}>
              <CanvasComponent
                onDelete={onDelete}
                onClickOutside={onClickOutside}
                onClick={onClick}
                item={{
                  ...child,
                  path: `${path}.children.${i}`,
                  parentPath: item.path,
                }}
                onDrop={onDrop}
                path={`${path}.children.${i}`}
              />

              <DropArea
                data={{
                  path: `${path}.children.${i + 1}`,
                }}
                onDrop={(dropArea, item) =>
                  run(dropItemCommand(dropArea, item))
                }
                accept={accept}
              />
            </div>
          );
        })}
      </Component>
    </Hover>
  );
};
