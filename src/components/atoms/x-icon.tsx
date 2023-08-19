import Image from "next/image";
import React from "react";

const X_icon = "/assets/icon-x.svg";

const XIcon = () => {
  return (
    <Image
      src={X_icon}
      alt="X-icon"
      width={64}
      height={64}
      className="m-auto"
    />
  );
};

export default XIcon;
