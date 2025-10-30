import styled from "styled-components";

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  color: #1f2937;
  text-align: left;

  &:focus {
    outline: none;
    border-color: #6366f1;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
