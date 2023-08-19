import Image from "next/image";
import React from "react";

const Logo = () => {
  const logo = "/assets/logo.svg";

  return (
    <div className="relative w-[71px] h-[32px]">
      <Image src={logo} fill alt="logo" />
    </div>
  );
};

export default Logo;
