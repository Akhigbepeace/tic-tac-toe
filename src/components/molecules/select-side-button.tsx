import React from "react";
import Typography from "@/components/atoms/typography";
import Image from "next/image";

const SelectSideButton = () => {
  const XShpae = "/assets/x-shape.png";
  const OShpae = "/assets/o-shape.png";
  return (
    <div className="px-[24px] flex flex-col items-center justify-center my-[40px] md:w-[460px] w-[327px] rounded-[10px] shadow-[0px_8px_0px_#10212A] bg-light-navy py-[30px]">
      <Typography variant="h4" color="grey">
        PICK PLAYER 1’S MARK
      </Typography>

      <div className="flex items-center text-[32px] font-[700]  md:w-[412px] w-[279px] h-[72px] rounded-[10px] mt-[24px] mb-[17px] justify-between px-[9px] bg-dark-navy">
        <button className="  hover:bg-[#A8BFC90D] transition-all h-[54px] rounded-[10px] md:w-[198px] w-[131px]">
          <div className="relative w-[32px] h-[32px] mx-auto">
            <Image src={XShpae} alt="X-shape" fill />
          </div>
        </button>

        <button className="bg-dark-grey rounded-[10px] md:w-[198px] w-[131px]  h-[54px]">
          <div className="relative w-[32px] h-[32px] mx-auto">
            <Image src={OShpae} alt="O-shape" fill />
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
