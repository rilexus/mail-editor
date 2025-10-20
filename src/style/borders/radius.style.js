import { css } from "styled-components";

const rounded = css`
  border-radius: ${({ theme }) => theme.radius.rounded};
`;

export { rounded };
