import { css } from "styled-components";

const mt1 = css`
  margin-top: ${({ theme }) => theme.spacing.padding.mt1};
`;
const mr1 = css`
  margin-right: ${({ theme }) => theme.spacing.padding.mr1};
`;
const mb1 = css`
  margin-bottom: ${({ theme }) => theme.spacing.padding.mb1};
`;
const ml1 = css`
  margin-left: ${({ theme }) => theme.spacing.padding.ml1};
`;

export { mb1, ml1, mr1, mt1 };
