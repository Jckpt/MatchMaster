import React from "react";
import Image from "next/image";
import Overview from "../../../components/Overview";
import { Kdam_Thmor_Pro } from "@next/font/google";
import Hero from "../../../components/Hero";
const page = async ({ params: { username, server } }) => {
  return (
    <Hero>
      <Overview username={username} server={server} />
    </Hero>
  );
};

export default page;
