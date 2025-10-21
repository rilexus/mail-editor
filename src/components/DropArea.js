import styled from "styled-components";
import { useDrop } from "react-dnd";
import React from "react";

export const Area = styled.div`
  height: 10px;
  ${({ $hover }) => ($hover ? "border: 2px dashed gray" : "")};
`;

export const DropArea = ({ data, accept, onDrop, onHover }) => {
  const [{ canDrop }, drop] = useDrop(
    () => ({
      accept,
      drop: (item, monitor) => {
        onDrop?.(data, item, monitor);
      },
      hover: (item, monitor) => {
        onHover?.(item, monitor);
      },
      collect: (monitor) => {
        return {
          canDrop: monitor.canDrop(),
        };
      },
    }),
    [data]
  );
  return <Area $hover={canDrop} ref={drop} />;
};
