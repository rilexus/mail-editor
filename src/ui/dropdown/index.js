import styled from "styled-components";

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f9fafb;
    border-color: #d1d5db;
  }

  svg {
    color: #6b7280;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  min-width: 200px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 4px;
  z-index: 1000;
`;

export const DropdownItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background: ${(props) => (props.$active ? "#f3f4f6" : "transparent")};
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: ${(props) => (props.$active ? "600" : "500")};
  color: #1f2937;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;

  &:hover {
    background: #f3f4f6;
  }

  svg {
    color: #6366f1;
  }
`;
