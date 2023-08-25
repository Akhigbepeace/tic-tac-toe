import Image from "next/image";
import React from "react";

const O_icon = "/assets/icon-o.svg";
const wininig_O_icon = "/assets/icon-o-grey.svg";

const OIcon = () => {
  // const winnnerIcon = winner ? wininig_O_icon : O_icon;

  return (
    <Image
      src={O_icon}
      // src={winnnerIcon}
      alt="O-icon"
      width={64}
      height={64}
      className="m-auto"
    />
  );
};

export default OIcon;
