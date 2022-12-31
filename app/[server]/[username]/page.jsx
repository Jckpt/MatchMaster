import React from "react";
import Image from "next/image";
import MatchHistory from "../../../components/MatchHistory";
import { Kdam_Thmor_Pro } from "@next/font/google";
import Hero from "../../../components/Hero";
const page = async ({ params: { username, server } }) => {
  return (
    <Hero>
      <MatchHistory className="w-6/12" username={username} server={server} />
    </Hero>
  );
};

export default page;
