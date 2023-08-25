import Image from "next/image";
import React from "react";

const X_icon = "/assets/icon-x.svg";
const winning_X_icon = "/assets/icon-x-grey.svg";

const XIcon = () => {
  // const winnerIcon = winner ? winning_X_icon : X_icon;
  return (
    <Image
      src={X_icon}
      // src={winnerIcon}
      alt="X-icon"
      width={64}
      height={64}
      className="m-auto"
    />
  );
};

export default XIcon;
