import Typography from "@/components/atoms/typography";
import clsx from "clsx";
import React from "react";

const Scores = () => {
  const scores = [
    {
      title: "X (YOU)",
      background: "bg-dark-blue",
      value: 0,
    },
    {
      title: "TIES",
      background: "bg-dark-grey",
      value: 0,
    },
    {
      title: "O (CPU)",
      background: "bg-dark-yellow",
      value: 0,
    },
  ];
  return (
    <div className="flex justify-between items-center gap-[20px]">
      {scores.map((score, index) => {
        return (
          <div
            key={index}
            className={clsx(
              score.background,
              "text-center flex flex-col text-dark-navy w-full rounded-[10px] p-[12px_19px] lg:p-[13px_42px] "
            )}
          >
            <Typography variant="p" color="navy">
              {score.title}
            </Typography>
            <Typography variant="h2" color="navy">
              {score.value}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default Scores;
