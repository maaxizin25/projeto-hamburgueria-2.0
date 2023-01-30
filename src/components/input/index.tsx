import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { InputStyle, LabelStyle } from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register?: UseFormRegisterReturn;
  type: string;
  id: string;
  placeholder: string;
}

export const Input = ({
  register,
  type,
  id,
  label,
  placeholder,
}: IInputProps) => {
  return (
    <>
      <LabelStyle htmlFor={id}>{label}</LabelStyle>
      <InputStyle type={type} id={id} {...register} placeholder={placeholder} />
    </>
  );
};
