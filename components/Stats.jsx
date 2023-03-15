import React from "react";

const Stats = ({ kda, cs }) => {
  return (
    <>
      <div>
        {kda.k}/{kda.d}/{kda.a}
      </div>
      <div>{cs} CS</div>
    </>
  );
};

export default Stats;
