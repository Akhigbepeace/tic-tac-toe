import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const logo = "/assets/logo.svg";

  return (
    <Link href="/" className="relative w-[71px] h-[32px]">
      <Image src={logo} fill alt="logo" />
    </Link>
  );
};

export default Logo;
