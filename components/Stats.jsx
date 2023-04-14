import React from "react";

const Stats = ({ kda, cs }) => {
  return (
    <div className="flex justify-between flex-col items-center">
      <div>
        {kda.k}/{kda.d}/{kda.a}
      </div>
      <div>{cs} CS</div>
    </div>
  );
};

export default Stats;
