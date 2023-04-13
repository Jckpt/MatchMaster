import React from "react";
import { getChampionIcon } from "../utils/getIcons";
import Image from "next/image";
import { BASE_URL } from "../utils/baseURL";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Link from "next/link";
const fetcher = (path) => fetch(`${BASE_URL}${path}`).then((res) => res.json());
const Participants = ({ participants, server }) => {
  return (
    <div className="grid grid-flow-col grid-rows-5">
      {participants?.map(({ championId, summonerName, team }, i) => (
        <Summoner
          championId={championId}
          summonerName={summonerName}
          team={team}
          key={i}
          server={server}
        />
      ))}
    </div>
  );
};

const Summoner = ({ championId, summonerName, team, server }) => {
  const router = useRouter();
  const { data, error } = useSWR(`/api/champion/${championId}`, fetcher);
  const [championName, version] = getChampionIcon(data?.champion);
  return (
    <Link
      className="pr-1 hidden md:flex flex-row hover:text-white"
      href={`/${server}/${summonerName}`}
    >
      <div className="avatar">
        <div className="w-6 h-6 rounded">
          <Image
            alt=""
            samesite="Strict"
            className="scale-115"
            src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`}
            height={48}
            width={48}
          />
        </div>
      </div>
      <div className="pl-1">
        {summonerName.length > 5
          ? `${summonerName.substring(0, 5).trim()}...`
          : summonerName}
      </div>
    </Link>
  );
};

export default Participants;
