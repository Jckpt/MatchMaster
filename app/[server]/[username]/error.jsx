"use client";
import React from "react";
import Hero from "../../../components/Hero";
import Navbar from "../../../components/Navbar";
const Error = ({ error, params }) => {
  console.log(params);
  return (
    <>
      <Navbar />
      <Hero>
        <h1 className="text-5xl font-bold">Summoner not found</h1>
      </Hero>
    </>
  );
};

export default Error;
