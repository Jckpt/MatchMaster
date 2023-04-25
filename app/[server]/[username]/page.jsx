import React from "react";
import Overview from "../../../components/Overview";
import Hero from "../../../components/Hero";
import Navbar from "../../../components/Navbar";
import { summonerData } from "../../../utils/gameData";

export async function generateMetadata({ params: { username, server } }) {
  const {
    data: {
      lol: { player },
    },
  } = await summonerData(username, server);
  console.log(player);
  return {
    title: `${decodeURI(username)} | MatchMaster`,
  };
}

const page = ({ params: { username, server } }) => {
  return (
    <>
      <meta
        name="description"
        content="MatchMaster - League of Legends match history app"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo-isolated.svg" />
      <Navbar />
      <Hero>
        <Overview username={username} server={server} />
      </Hero>
    </>
  );
};

export default page;
