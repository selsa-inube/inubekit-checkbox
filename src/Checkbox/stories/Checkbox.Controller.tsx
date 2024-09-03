import { useState, useEffect } from "react";
import { ICheckbox, Checkbox } from "..";

const CheckboxController = (props: ICheckbox) => {
  const { checked, indeterminate } = props;

  const [isChecked, setIsChecked] = useState(checked);
  const [isIndeterminate, setIsIndeterminate] = useState(indeterminate);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  useEffect(() => {
    setIsIndeterminate(indeterminate);
  }, [indeterminate]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isIndeterminate) {
      setIsChecked(!isChecked);
      setIsIndeterminate(false);
      props.onChange({
        ...event,
        target: { ...event.target, checked: !isChecked, indeterminate: false },
      });
    } else {
      setIsChecked(event.target.checked);
      props.onChange(event);
    }
  };

  return (
    <Checkbox
      {...props}
      checked={isChecked}
      indeterminate={isIndeterminate}
      onChange={handleChange}
    />
  );
};

export { CheckboxController };
