import { getComponent } from "./getElement";
import styled from "styled-components";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";

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
  onClick,
  onClickOutside,
  ...props
}) => {
  const ref = useRef(null);
  const Component = getComponent(data);

  useOnClickOutside(ref, () => onClickOutside(path));

  return (
    <Hover
      ref={ref}
      style={{
        position: "relative",
      }}
      onClick={() => onClick(path)}
    >
      <Controls>
        <button onClick={() => onDelete(path, data)}>delete</button>
      </Controls>
      <Component {...props} data={data} onDrop={onDrop} path={path}>
        {data.children.map((child, i) => {
          return (
            <CanvasComponent
              onClickOutside={onClickOutside}
              onClick={onClick}
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
