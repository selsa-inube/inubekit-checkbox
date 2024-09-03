const parameters = {
  docs: {
    descriptions: {
      component:
        "A Checkbox allows the user to select multiple options from a list.",
    },
  },
};

const props = {
  id: {
    description:
      "(string): A unique identifier for the Checkbox, used to link the label and the input.",
  },
  name: {
    description:
      "(string): (Optional) A descriptive name for the Checkbox, used in form submissions.",
  },
  value: {
    description:
      "(string): The value that will be submitted when the Checkbox is selected.",
  },
  checked: {
    description:
      "(boolean): (Optional) Indicates whether the Checkbox is currently selected.",
  },
  label: {
    description:
      "(string): The text label that will be displayed next to the Checkbox.",
  },
  disabled: {
    description:
      "(boolean): (Optional) Disables the Checkbox, preventing user interaction.",
  },
  required: {
    description:
      "(boolean): (Optional) Marks the Checkbox as required, indicating that the user must select this option to proceed.",
  },
  onChange: {
    description:
      "(Function): A function that will be called whenever the Checkbox's state changes.",
  },
};

export { parameters, props };
