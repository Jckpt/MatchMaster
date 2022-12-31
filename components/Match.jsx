import React from "react";
import ItemIcon from "./ItemIcon";

const Match = ({ build, champion, kda }) => {
  const trinket = build.pop();

  //add null value that will be replaced as placeholder box if player didn't use all 6 inventory space
  for (let i = build.length; i < 6; i++) {
    build.push(null);
  }
  return (
    <div className="card bg-base-100 shadow-xl mb-2">
      <div className="card-body">
        <div>
          kda {kda.k}/{kda.d}/{kda.a}
        </div>
        <div className="flex items-center ">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full mr-3">
              <img alt="" src={champion} />
            </div>
          </div>
          <div className="grid-cols-3 grid gap-1 w-40">
            {build.map((item, i) => (
              <div className="avatar" key={i}>
                <div className="w-12 h-12 rounded">
                  <ItemIcon item={item} />
                </div>
              </div>
            ))}
          </div>
          <div className="avatar">
            <div className="w-12 h-12 rounded mr-3">
              <ItemIcon item={trinket} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
