"use client";
import clsx from "clsx";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  marginTop?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  fullWidth,
  marginTop,
}) => {
  const { pending } = useFormStatus();
  return (
    <button
      type={type}
      disabled={pending}
      onClick={onClick}
      className={clsx(
        `bg-purple-600 px-4 py-1 rounded-md text-white h-full transition duration-300 hover:bg-purple-600/75`,
        fullWidth && `w-full`,
        marginTop && "mt-5"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
