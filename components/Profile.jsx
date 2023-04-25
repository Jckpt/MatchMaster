import React from "react";
import { summonerData } from "../utils/gameData";
import Image from "next/image";
import { notFound } from "next/navigation";

const Profile = async ({ username, server }) => {
  const {
    data: {
      lol: { player },
    },
  } = await summonerData(username, server);
  if (player === null) notFound();
  return (
    <div className="card w-full mb-4 bg-base-200 backdrop-blur-sm bg-opacity-50 shadow-xl">
      <div className="card-body flex justify-center items-center">
        <div className="avatar  ">
          <div className="rounded-full border-4 border-[#9c98d8]">
            <Image
              alt=""
              samesite="Strict"
              src={`https://cdn.mobalytics.gg/assets/lol/images/dd/summoner-icons/${player.icon}.png?1`}
              width={96}
              height={96}
            />
          </div>
        </div>
        <h1 className="text-2xl">{decodeURIComponent(username)}</h1>
      </div>
    </div>
  );
};

export default Profile;
