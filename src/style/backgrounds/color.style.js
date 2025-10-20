import { css } from "styled-components";

const bgGray100 = css`
  background-color: ${({ theme }) => theme.colors.grey1};
`;

const bgRed100 = css`
  background-color: ${({ theme }) => theme.colors.red1};
`;

const bgPrimary = css`
  background-color: ${({ theme }) => theme.colors.backgrounds.primary};
`;

export { bgGray100, bgRed100, bgPrimary };
