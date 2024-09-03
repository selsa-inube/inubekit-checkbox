import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    border-color: ${({ theme }) =>
      theme?.checkbox?.border?.color?.checked ||
      inube.checkbox.border.color.checked};
    background-color: ${({ theme }) =>
      theme?.checkbox?.background?.color?.checked ||
      inube.checkbox.background.color.checked};
  }

  &:focus + span {
    outline: 2px solid
      ${({ theme }) =>
        theme?.checkbox?.vector?.color?.hover ||
        inube.checkbox.vector.color.hover};
    outline-offset: 2px;
  }

  &:disabled + span {
    border-color: ${({ theme }) =>
      theme?.checkbox?.border?.color?.disabled ||
      inube.checkbox.border.color.disabled};
    background-color: ${({ theme }) =>
      theme?.checkbox?.background?.color?.disabled ||
      inube.checkbox.background.color.disabled};
  }
`;

const StyledSpan = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 2px;
  border: 2px solid
    ${({ theme, checked, $indeterminate }) =>
      checked || $indeterminate
        ? theme?.checkbox?.border?.color?.checked ||
          inube.checkbox.border.color.checked
        : theme?.checkbox?.border?.color?.active ||
          inube.checkbox.border.color.active};
  background-color: ${({ theme, checked, $indeterminate }) =>
    checked || $indeterminate
      ? theme?.checkbox?.background?.color?.checked ||
        inube.checkbox.background.color.checked
      : theme?.checkbox?.background?.color?.active ||
        inube.checkbox.background.color.active};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ disabled }) =>
    disabled &&
    `
    border-color: ${inube.checkbox.border.color.disabled};
    background-color: ${inube.checkbox.background.color.disabled};
  `}
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;

const StyledPreventSelectableLabel = styled.label`
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export {
  StyledCheckbox,
  StyledSpan,
  StyledLabel,
  StyledPreventSelectableLabel,
};
