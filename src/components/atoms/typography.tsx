import React from "react";

const typographyVariants = {
  h1: "text-[40px] font-[700] text-dark-grey",
  h2: "text-[24px] font-[700] text-dark-grey",
  h3: "text-[20px] font-[700] text-dark-grey",
  h4: "text-[16px] font-[700] text-dark-grey",
  p: "text-[14px] font-[500] text-dark-grey",
};

type TypographyVariants = keyof typeof typographyVariants;

interface TypographyProps {
  variant: TypographyVariants;
  className?: string;
  children: string | number;
}

const Typography = (props: TypographyProps) => {
  const { children, className, variant } = props;
  const typographyClass = typographyVariants[variant];

  return <div className={`${typographyClass} ${className}`}>{children}</div>;
};

export default Typography;
