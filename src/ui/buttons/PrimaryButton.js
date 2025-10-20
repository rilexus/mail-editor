import styled, { css } from "styled-components";

import { pb1, pl1, pr1, pt1 } from "../../style";

import { bgPrimary } from "../../style/backgrounds";
import { borderNone } from "../../style/borders";
import { textPrimary } from "../../style/typography/text";

const primaryButtonPaddings = css`
  ${pt1};
  ${pr1};
  ${pb1};
  ${pl1};
`;

const primaryButtonStyle = css`
  ${primaryButtonPaddings};
  ${bgPrimary};
  ${borderNone};
  ${textPrimary};
`;

const PrimaryButton = styled.button`
  ${primaryButtonStyle};
`;

export { PrimaryButton, primaryButtonStyle };
