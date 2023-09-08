import React, { useState } from "react";
import Typography from "@/components/atoms/typography";
import Image from "next/image";
import clsx from "clsx";
import { ImCross } from "react-icons/im";

const SelectSideButton = () => {
  const XShpae = "/assets/icon-x-grey.svg";
  const OShpae = "/assets/icon-o-grey.svg";
  const grey_O_icon = "/assets/grey_O_icon.svg";

  const [selectPlayer, setSelectPlayer] = useState<boolean>(true);

  return (
    <div className="px-[24px] flex flex-col items-center justify-center my-[40px] md:w-[460px] w-[327px] rounded-[10px] shadow-[0px_8px_0px_#10212A] bg-light-navy py-[30px]">
      <Typography variant="h4" color="grey">
        PICK PLAYER 1’S MARK
      </Typography>

      <div className="flex items-center gap-[9px] text-[32px] font-[700]  md:w-[412px] w-[279px] h-[72px] rounded-[10px] mt-[24px] mb-[17px] justify-between px-[9px] bg-dark-navy">
        <button
          className={clsx(
            selectPlayer && "bg-dark-grey hover:bg-light-grey",
            "hover:bg-[#A8BFC90D] transition-all h-[54px] rounded-[10px] md:w-[198px] w-[131px]"
          )}
          onClick={() => {
            setSelectPlayer(!selectPlayer);
            if (!selectPlayer === false) {
              setSelectPlayer(selectPlayer);
            }
          }}
        >
          <div className="relative w-[32px] h-[32px] mx-auto">
            {!selectPlayer ? (
              <Image src={XShpae} alt="X-shape" fill />
            ) : (
              <ImCross color="#1A2A33" size={32} />
            )}
          </div>
        </button>

        <button
          className={clsx(
            !selectPlayer && "bg-dark-grey  hover:bg-light-grey",
            "rounded-[10px] md:w-[198px] hover:bg-[#A8BFC90D] w-[131px] h-[54px]"
          )}
          onClick={() => {
            setSelectPlayer(!selectPlayer);
            if (selectPlayer === false) {
              setSelectPlayer(selectPlayer);
            }
          }}
        >
          <div className="relative w-[32px] h-[32px] mx-auto">
            <Image
              src={!selectPlayer ? OShpae : grey_O_icon}
              alt="O-shape"
              fill
            />
          </div>
        </button>
      </div>

      <div className="opacity-50">
        <Typography variant="p" color="grey">
          REMEMBER : X GOES FIRST
        </Typography>
      </div>
    </div>
  );
};

export default SelectSideButton;
