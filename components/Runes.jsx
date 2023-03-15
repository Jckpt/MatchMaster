import React from "react";
import Image from "next/image";
const Runes = ({ IDs, subStyle }) => {
  return (
    <div className="flex flex-col">
      <div className="avatar">
        <div className="w-8 h-8">
          <Image
            alt=""
            samesite="Strict"
            src={`https://cdn.mobalytics.gg/assets/lol/images/perks/${IDs[0]}.png`}
            height={32}
            width={32}
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-8 h-8">
          <Image
            alt=""
            samesite="Strict"
            src={`https://cdn.mobalytics.gg/assets/lol/images/perks/${subStyle}.png`}
            height={32}
            width={32}
          />
        </div>
      </div>
    </div>
  );
};

export default Runes;
