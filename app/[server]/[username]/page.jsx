import React from "react";
import Overview from "../../../components/Overview";
import Hero from "../../../components/Hero";
const page = async ({ params: { username, server } }) => {
  return (
    <Hero>
      <Overview username={username} server={server} />
    </Hero>
  );
};

export default page;
