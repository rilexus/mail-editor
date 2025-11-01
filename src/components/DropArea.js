import styled from "styled-components";
import { useDrop } from "react-dnd";

const Area = styled.div`
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
      drop: (item) => {
        onDrop?.(data, item);
      },
      hover: (item) => {
        onHover?.(item);
      },
      collect: (monitor) => {
        return {
          canDrop: monitor.canDrop(),
        };
      },
    }),
    [data.path]
  );
  return <Area $canDrop={canDrop} ref={drop} />;
};
