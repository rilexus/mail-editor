import { css } from "styled-components";

const textBlack = css`
  color: black;
`;

const textPrimary = css`
  color: ${({ theme }) => theme.typography.color.primary};
`;

export { textBlack, textPrimary };
