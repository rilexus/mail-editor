import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  transition: color 0.2s;

  &:hover {
    color: #ef4444;
  }
`;

export const DeleteButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <svg width="1rem" height="1rem" viewBox="0 0 16 16" fill="none">
        <path
          d="M3 4h10M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1M6 7v5M10 7v5M4 4h8l-.5 9a1 1 0 01-1 1h-5a1 1 0 01-1-1L4 4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
};
