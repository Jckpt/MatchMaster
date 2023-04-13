import React from "react";
import Overview from "../../../components/Overview";
import Hero from "../../../components/Hero";
import Navbar from "../../../components/Navbar";
const page = ({ params: { username, server } }) => {
  return (
    <>
      <Navbar />
      <Hero>
        <Overview username={username} server={server} />
      </Hero>
    </>
  );
};

export default page;
