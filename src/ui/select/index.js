import styled from "styled-components";

export const Select = styled.select`
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  color: #1f2937;
  background: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #6366f1;
  }

  &:disabled {
    cursor: not-allowed;
    background: light-dark(rgba(239, 239, 239, 0.3), rgba(59, 59, 59, 0.3));
  }
`;
