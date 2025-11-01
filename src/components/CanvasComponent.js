import { getComponent } from "./getElement";
import styled from "styled-components";
import { useOnClickOutside } from "usehooks-ts";
import {
  Fragment,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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

export const CanvasComponent = memo(
  ({ path, item, onDrop, onDelete, onClick, onClickOutside }) => {
    const selectedComponentPath = useApplicationState(
      ({ selectedComponent }) => selectedComponent?.path
    );
    const run = useApplicationState(({ run }) => run);

    const isSelected = selectedComponentPath === path;

    const [_, drag, dragPreview] = useDrag(
      () => ({
        // "type" is required. It is used by the "accept" specification of drop targets.
        type: item.name,
        item: { path: item.path },
      }),
      [item.path]
    );
    const ref = useRef(null);
    const isHover = useOver(ref);

    const Component = useMemo(() => getComponent(item), [item]);

    useOnClickOutside(ref, () => onClickOutside?.(path));
    const { accept, children } = item;

    const handleDrop = useCallback(
      (dropArea, item) => run(dropItemCommand(dropArea, item)),
      []
    );

    return (
      <Hover
        ref={mergeRefs([ref, dragPreview, drag])}
        $active={isHover || isSelected}
        style={{
          paddingLeft: isHover ? 10 : 0,
          position: "relative",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.(item);
        }}
      >
        {/*<Controls>*/}
        {/*  <div*/}
        {/*    style={{*/}
        {/*      display: "flex",*/}
        {/*      flexDirection: "row",*/}
        {/*      gap: "16px",*/}
        {/*      justifyContent: "end",*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <button*/}
        {/*      onClick={(e) => {*/}
        {/*        // e.stopPropagation();*/}
        {/*        onDelete(item);*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      Delete*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</Controls>*/}
        <Component {...item.props} name={item.name}>
          <DropArea
            data={{
              path: `${path}.children.0`,
            }}
            onDrop={handleDrop}
            accept={accept}
          />
          {children.map((child, i) => {
            const childPath = `${path}.children.${i}`;
            return (
              <div key={childPath} style={{ paddingLeft: 15 }}>
                <CanvasComponent
                  onDelete={onDelete}
                  onClickOutside={onClickOutside}
                  onClick={onClick}
                  item={{
                    ...child,
                    path: childPath,
                    parentPath: item.path,
                  }}
                  onDrop={onDrop}
                  path={childPath}
                />

                <DropArea
                  data={{
                    path: `${path}.children.${i + 1}`,
                  }}
                  onDrop={handleDrop}
                  accept={accept}
                />
              </div>
            );
          })}
        </Component>
      </Hover>
    );
  }
);
