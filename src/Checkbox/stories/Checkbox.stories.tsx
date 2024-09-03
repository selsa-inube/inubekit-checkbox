import { ICheckbox } from "..";
import { CheckboxController } from "./Checkbox.Controller";
import { parameters, props } from "../props";

const story = {
  title: "Inputs/Checkbox",
  component: CheckboxController,
  parameters,
  argTypes: props,
};

const Default = (args: ICheckbox) => <CheckboxController {...args} />;

Default.args = {
  id: "checkbox1",
  label: "Label",
  name: "checkboxGroup",
  checked: false,
  indeterminate: false,
  disabled: false,
};

export { Default };
export default story;
