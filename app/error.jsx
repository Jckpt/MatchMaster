"use client";
import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { useRouter, useParams } from "next/navigation";
const Error = ({ error }) => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Navbar />
      <Hero>
        <h1 className="text-5xl font-bold">Error occured</h1>
      </Hero>
    </>
  );
};

export default Error;
