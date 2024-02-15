"use client";
import clsx from "clsx";
import {
  FieldErrors,
  UseFormRegisterReturn,
} from "react-hook-form";
import { ChangeEvent } from "react";

interface InputProps {
  label?: string;
  id: string;
  type?: string;
  register?: UseFormRegisterReturn;
  errors?: FieldErrors;
  disabled?: boolean;
  noLabel?: boolean;
  isTextArea?: boolean;
  placeHolder?: string;
  noBorder?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  register,
  errors,
  disabled,
  isTextArea,
  noLabel,
  placeHolder,
  value,
  onChange,
  noBorder,
}) => {
  const inputElement = isTextArea ? (
    <textarea
      id={id}
      autoComplete={id}
      rows={6}
      disabled={disabled}
      placeholder={placeHolder}
      {...register}
      className={clsx(
        `block
      w-full
      rounded-md
      border-0
      py-1.5
      px-1
      text-gray-900
      shadow-md
      ring-1
      ring-inset
      ring-gray-300
      placeholder:text-gray-400
      focus:ring-2
      focus:outline-purple-600
      sm:text-sm
      sm:leading-6
     
      `,
        errors && errors[id] && "ring-rose-700",
        disabled && "opacity-50 cursor-default"
      )}
    />
  ) : (
    <input
      id={id}
      type={type}
      autoComplete={id}
      name={id}
      value={value}
      disabled={disabled}
      placeholder={placeHolder}
      {...register}
      onChange={onChange}
      className={clsx(
        `block
      w-full
      rounded-md
      border-0
      py-1.5
      px-1
      text-gray-900
      shadow-md
      ring-1
      ring-inset
      ring-gray-300
      placeholder:text-gray-400
      focus:ring-2
      focus:outline-purple-600
      sm:text-sm
      sm:leading-6
     
      `,

        // DELETED MB-5
        errors && errors[id] && "ring-rose-700",
        disabled && "opacity-50 cursor-default",
        noBorder && "ring-0 shadow-none mb-5"
      )}
    />
  );

  return (
    <div>
      {!noLabel && (
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900 mb-2"
        >
          {label}:
        </label>
      )}
      <div>
        {inputElement}
        {errors && errors[id] && (
          <span className="text-red-600 text-sm">
            {errors[id]?.message && (
              <>{errors[id]?.message}</>
            )}
            {!errors[id]?.message && `${label} is required`}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
