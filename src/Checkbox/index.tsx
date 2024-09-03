import { Stack } from "@inubekit/stack";
import { Label } from "@inubekit/label";
import { Text } from "@inubekit/text";
import { MdCheck, MdRemove } from "react-icons/md";
import {
  StyledCheckbox,
  StyledLabel,
  StyledPreventSelectableLabel,
  StyledSpan,
} from "./styles";
import { inube } from "@inubekit/foundations";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface ICheckbox {
  id: string;
  name?: string;
  value: string;
  checked?: boolean;
  indeterminate?: boolean;
  label: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: ICheckbox) => {
  const {
    id,
    name,
    value,
    checked = false,
    indeterminate = false,
    label,
    disabled = false,
    required = false,
    onChange,
  } = props;

  const theme: typeof inube = useContext(ThemeContext);
  const disabledAppearance =
    theme?.checkbox?.vector?.color?.disabled ||
    inube.checkbox.vector.color.disabled;
  const indeterminateAppearance =
    theme?.checkbox?.vector?.color?.indeterminate ||
    inube.checkbox.vector.color.indeterminate;
  const checkedAppearance =
    theme?.checkbox?.vector?.color?.checked ||
    inube.checkbox.vector.color.checked;

  return (
    <Stack direction="row" alignItems="center" gap="10px" width="fit-content">
      <StyledLabel>
        <StyledCheckbox
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked || indeterminate}
          disabled={disabled}
          required={required}
          onChange={onChange}
          ref={(el: { indeterminate: boolean }) => {
            if (el) el.indeterminate = indeterminate;
          }}
        />
        <StyledSpan
          checked={checked}
          $indeterminate={indeterminate}
          disabled={disabled}
        >
          {indeterminate ? (
            <MdRemove
              color={disabled ? disabledAppearance : indeterminateAppearance}
            />
          ) : (
            checked && (
              <MdCheck
                color={disabled ? disabledAppearance : checkedAppearance}
              />
            )
          )}
        </StyledSpan>
      </StyledLabel>
      {label && (
        <StyledPreventSelectableLabel>
          <Label htmlFor={id} disabled={disabled}>
            <Stack direction="row" alignItems="center" gap="4px">
              {label}
              {required && (
                <Text type="label" appearance="danger" size="small">
                  *
                </Text>
              )}
            </Stack>
          </Label>
        </StyledPreventSelectableLabel>
      )}
    </Stack>
  );
};

export { Checkbox };
export type { ICheckbox };
