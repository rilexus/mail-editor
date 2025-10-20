import styled from "styled-components";
import { useDrop } from "react-dnd";
import React from "react";

const Area = styled.div`
  height: 10px;
  ${({ $hover }) => ($hover ? "border: 2px dashed lightgray" : "")};
`;

export const DropArea = ({ accept, onDrop, onHover }) => {
  const [{ canDrop }, drop] = useDrop(() => ({
    accept,
    drop: (item, monitor) => {
      onDrop?.(item, monitor);
    },
    hover: (item, monitor) => {
      onHover?.(item, monitor);
    },
    collect: (monitor) => {
      return {
        canDrop: monitor.canDrop(),
      };
    },
  }));
  return <Area $hover={canDrop} ref={drop} />;
};
