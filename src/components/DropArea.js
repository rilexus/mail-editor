import styled from "styled-components";
import { useDrop } from "react-dnd";
export const Area = styled.div`
  min-height: 10px;
  min-width: 10px;
  ${({ $canDrop }) =>
    $canDrop
      ? `
    border: 1px solid #f9f9f9;
    background: #6465f01f;
    border-radius: 8px;
    `
      : ""};
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
  return <Area $canDrop={canDrop} ref={drop} />;
};
