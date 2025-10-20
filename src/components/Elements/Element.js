import { getElement } from "../getElement";
import styled from "styled-components";
import { Elements } from "./Elements";

const ElementOverlay = styled.div`
  position: absolute;
  inset: 0;

  &:hover {
    border: 3px solid #6366f1;
    border-radius: 8px;
  }
`;

export const Element = ({
  id,
  type,
  accept,
  elements,
  onClick,
  onDrop,
  ...rest
}) => {
  const Elem = getElement(type);
  return (
    <div
      id={id}
      style={{
        position: "relative",
        padding: "0 0 10px 0",
      }}
    >
      <ElementOverlay
        onClick={() => {
          onClick?.(id);
        }}
      />
      <Elem {...rest}>
        <Elements
          path={id}
          onDrop={(...args) => {
            console.log(args);
            // onDrop()
          }}
          onClick={onClick}
          elements={elements}
          accept={accept}
        />
        {/*{elements &&*/}
        {/*  Object.entries(elements).map(([t, data]) => (*/}
        {/*    <Element*/}
        {/*      id={`${id}.elements.${t}`}*/}
        {/*      onDrop={onDrop}*/}
        {/*      key={`${id}.${t}`}*/}
        {/*      type={t}*/}
        {/*      {...data}*/}
        {/*    />*/}
        {/*  ))}*/}
      </Elem>
    </div>
  );
};
