import Typography from "@/components/atoms/typography";
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
            className={`text-center text-dark-navy ${score.background} w-full rounded-[10px] p-[12px_20px] lg:p-[13px_42px] `}
          >
            <Typography variant="p" className=" text-dark-navy">
              {score.title}
            </Typography>
            <Typography variant="h2" className=" text-dark-navy">
              {score.value}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default Scores;
