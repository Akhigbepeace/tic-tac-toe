import React from "react";
import Typography from "../atoms/typography";
import Button from "../atoms/button";
import clsx from "clsx";

interface ModalProps {
  showModalClsx: string;
  handleSecondaryButton: () => void;
  handlePrimaryButton: () => void;
  primaryButtonText: "YES, RESTART " | "NEXT ROUND";
  secondaryButtonText: "NO, CANCEL" | "QUIT";
}

const Modal = (props: ModalProps) => {
  const {
    showModalClsx,
    primaryButtonText = "NEXT ROUND",
    secondaryButtonText = "QUIT",
    handlePrimaryButton,
    handleSecondaryButton
  } = props;


  return (
    <div
      className={clsx(
        showModalClsx,
        "absolute grid place-items-center bg-[#00000080] w-full text-white h-full top-0 left-0"
      )}
    >
      <div className="bg-light-navy w-full py-[67px] flex flex-col items-center justify-center">
        <div className="space-x-[3px]">
          <Typography variant={"h1"} color="grey">
            RESTART GAME?
          </Typography>
        </div>

        <div className="flex mt-[31px] gap-[16px]  ">
          <Button
            variant="secondaryButton2"
            size="auto"
            handleOnClick={handleSecondaryButton}
            // handleOnClick={handleModalDisplay}
          >
            {secondaryButtonText}
          </Button>
          <Button
            variant="primaryButton1"
            size="auto"
            handleOnClick={handlePrimaryButton}
          >
            {primaryButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
