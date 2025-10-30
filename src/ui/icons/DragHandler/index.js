import styled from "styled-components";
import { forwardRef } from "react";

export const Styled = styled.div`
  display: flex;
  align-items: center;
  color: #9ca3af;
  opacity: 1;
  transition: opacity 0.2s;
  cursor: grab;
  width: 2rem;
  height: 2rem;
`;

export const DragHandler = forwardRef((props, ref) => {
  return (
    <Styled ref={ref} {...props}>
      <svg width="2rem" height="2rem" viewBox="0 0 16 16" fill="none">
        <circle cx="6" cy="4" r="1" fill="currentColor" />
        <circle cx="10" cy="4" r="1" fill="currentColor" />
        <circle cx="6" cy="8" r="1" fill="currentColor" />
        <circle cx="10" cy="8" r="1" fill="currentColor" />
        <circle cx="6" cy="12" r="1" fill="currentColor" />
        <circle cx="10" cy="12" r="1" fill="currentColor" />
      </svg>
    </Styled>
  );
});
