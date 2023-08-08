import React from "react";

const backgroundVariant = {
  primaryButton1:
    "bg-dark-yellow hover:bg-light-yellow shadow-[0px_8px_0px_#CC8B13]",
  primaryButton2:
    "bg-dark-blue hover:bg-light-blue shadow-[0px_8px_0px_#118C87]",
  secondaryButton1:
    "bg-dark-yellow hover:bg-light-yellow shadow-[0px_8px_0px_#CC8B13]",
  secondaryButton2:
    "bg-dark-grey hover:bg-light-grey shadow-[0px_8px_0px_#6B8997]",
};

const sizeMapper = {
  primary: "w-[460px] text-[20px]",
  secondary: "w-[226px] text-[16px] ",
};

type BackgroundVariant = keyof typeof backgroundVariant;
type SizeVariant = keyof typeof sizeMapper;

type ButtonProps = {
  variant: BackgroundVariant;
  size: SizeVariant;
  children: string;
  handleOnClick: () => void;
};

const Button = (props: ButtonProps) => {
  const { children, variant, size, handleOnClick } = props;
  const background = backgroundVariant[variant];
  const sizes = sizeMapper[size];
  return (
    <button
      className={`${background} ${sizes} py-[15px] font-[700] text-center text-dark-navy rounded-[10px] `}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
