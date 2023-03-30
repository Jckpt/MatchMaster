import React from "react";
import { summonerData } from "../utils/gameData";
import Image from "next/image";
const Profile = async ({ username, server }) => {
  const {
    data: {
      lol: { player },
    },
  } = await summonerData(username, server);
  return (
    <div className="card w-full mb-4 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Profil</h2>
        <Image
          alt=""
          samesite="Strict"
          src={`https://cdn.mobalytics.gg/assets/lol/images/dd/summoner-icons/${player.icon}.png`}
          width={96}
          height={96}
        />
        <p>{decodeURIComponent(username)}</p>
      </div>
    </div>
  );
};

export default Profile;
