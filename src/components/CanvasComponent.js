import { getComponent } from "./getElement";
import styled from "styled-components";

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
  parent,
  onDrop,
  onDelete,
  ...props
}) => {
  const Component = getComponent(data);
  return (
    <Hover
      style={{
        position: "relative",
      }}
    >
      <Controls>
        <button onClick={() => onDelete(path, data)}>delete</button>
      </Controls>
      <Component {...props} data={data} onDrop={onDrop} path={path}>
        {data.children.map((child, i) => {
          return (
            <CanvasComponent
              key={i}
              parent={data}
              data={child}
              onDrop={onDrop}
              path={`${path}.${i}`}
            />
          );
        })}
      </Component>
    </Hover>
  );
};
