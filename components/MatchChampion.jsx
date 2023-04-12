import React from "react";
import Image from "next/image";
import { getChampionIcon, getVersion } from "../utils/getIcons";
import useSWR from "swr";
import { BASE_URL } from "../utils/baseURL";
const fetcher = (path) => fetch(`${BASE_URL}${path}`).then((res) => res.json());

const MatchChampion = ({ matchResult, championId }) => {
  const { data, error, isLoading } = useSWR(
    `/api/champion/${championId}`,
    fetcher
  );
  const [championName, version] = getChampionIcon(data?.champion);
  return (
    <div className="avatar">
      <div
        className={`w-12 h-12 rounded-full border-2 ${
          matchResult === "WON" ? "border-blue-500" : "border-red-500"
        } mr-2`}
      >
        {isLoading ? (
          <div className="placeholder-black w-12 h-12"></div>
        ) : (
          <Image
            alt=""
            samesite="Strict"
            className="scale-115"
            src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`}
            height={48}
            width={48}
          />
        )}
      </div>
    </div>
  );
};

export default MatchChampion;
