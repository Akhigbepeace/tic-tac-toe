import Image from "next/image";
import React from "react";

const O_icon = "/assets/icon-o.svg";

const OIcon = () => {
  return (
    <Image
      src={O_icon}
      alt="O-icon"
      width={64}
      height={64}
        className="m-auto"
    />
  );
};

export default OIcon;
