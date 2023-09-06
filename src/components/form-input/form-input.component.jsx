import { Group, Input, FormInputLabel } from "./form-input.styles";

function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}

export default FormInput;
