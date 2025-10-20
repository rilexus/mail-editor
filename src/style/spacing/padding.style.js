import { css } from "styled-components";

const pt1 = css`
  padding-top: ${({ theme }) => theme.spacing.padding.pt1};
`;
const pr1 = css`
  padding-right: ${({ theme }) => theme.spacing.padding.pr1};
`;
const pb1 = css`
  padding-bottom: ${({ theme }) => theme.spacing.padding.pb1};
`;
const pl1 = css`
  padding-left: ${({ theme }) => theme.spacing.padding.pl1};
`;

export { pb1, pl1, pr1, pt1 };
