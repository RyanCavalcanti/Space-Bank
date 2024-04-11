import React from "react";
import { InputFormStyles } from "../../styles/FormStyles";

interface FormInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <InputFormStyles
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default FormInput;
