import clsx from "clsx";
import React from "react";

const typographyVariants = {
  h1: "text-[40px] font-[700] text-dark-grey",
  h2: "text-[24px] font-[700] text-dark-grey",
  h3: "text-[20px] font-[700] text-dark-grey",
  h4: "text-[16px] font-[700] text-dark-grey",
  p: "text-[14px] font-[500] text-dark-grey",
};

const textColorVariants = {
  grey: "text-dark-grey",
  yellow: "text-dark-yellow",
  blue: "text-dark-blue",
  navy: "text-dark-navy",
};

type TypographyVariants = keyof typeof typographyVariants;
type TextColorVariants = keyof typeof textColorVariants;

interface TypographyProps {
  variant: TypographyVariants;
  children: string | number;
  color: TextColorVariants;
}

const Typography = (props: TypographyProps) => {
  const { children, variant, color = "grey" } = props;

  const typographyClx = typographyVariants[variant];
  const textColorClx = textColorVariants[color];

  return <span className={clsx(typographyClx, textColorClx)}>{children}</span>;
};

export default Typography;
