import Button, {
  BackgroundVariant,
  SizeVariant,
} from "@/components/atoms/button";
import Logo from "@/components/atoms/logo";
import SelectSideButton from "@/components/molecules/select-side-button";
import {
  handleNewGameVsComputer,
  handleNewGameVsPlayer,
} from "@/config/select-opponent";
import React, { useState } from "react";
import { NextRouter, useRouter } from "next/router";

type SelectOponentButtonType = {
  variant: BackgroundVariant;
  size: SizeVariant;
  handleButtonClick: (router: NextRouter) => void;
  children: string;
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(Array(2).fill(false));

  const router = useRouter();

  const selectOponentButton: SelectOponentButtonType[] = [
    {
      variant: "primaryButton1",
      size: "primary",
      handleButtonClick: handleNewGameVsComputer,
      children: "NEW GAME (VS CPU)",
    },
    {
      variant: "primaryButton2",
      size: "primary",
      handleButtonClick: handleNewGameVsPlayer,
      children: "NEW GAME (VS PLAYER)",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen px-[24px] md:px-0">
      <Logo />

      <SelectSideButton />

      <div className="flex flex-col gap-[20px]">
        {selectOponentButton.map((oponent, index) => {
          const { variant, size, children, handleButtonClick } = oponent;

          return (
            <Button
              key={index}
              variant={variant}
              size={size}
              handleOnClick={() => {
                const newLoading = [...isLoading];
                newLoading[index] = true;
                setIsLoading(newLoading);
                handleButtonClick(router);
              }}
            >
              {isLoading[index] ? "Please Wait..." : children}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
