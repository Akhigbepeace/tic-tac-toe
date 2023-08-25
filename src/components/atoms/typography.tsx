import clsx from "clsx";
import React, { ReactNode } from "react";

const typographyVariants = {
  h1: "text-[40px] font-[700]",
  h2: "text-[24px] font-[700]",
  h3: "text-[20px] font-[700]",
  h4: "text-[16px] font-[700]",
  p: "text-[14px] font-[500]",
};

const textColorVariants = {
  grey: "text-dark-grey",
  yellow: "text-dark-yellow",
  blue: "text-dark-blue",
  navy: "text-dark-navy",
};

type TypographyVariants = keyof typeof typographyVariants;
type TextColorVariants = keyof typeof textColorVariants;

type TypographyProps = {
  variant: TypographyVariants;
  children: string | number | ReactNode;
  color: TextColorVariants;
  htmlTag?: TypographyVariants | "span" | "div";
};

const Typography = (props: TypographyProps) => {
  const { children, variant, htmlTag, color = "grey" } = props;
  const Component = htmlTag || variant;
  const typographyClx = typographyVariants[variant];
  const textColorClx = textColorVariants[color];

  return (
    <Component className={clsx(typographyClx, textColorClx)}>
      {children}
    </Component>
  );
};

export default Typography;
