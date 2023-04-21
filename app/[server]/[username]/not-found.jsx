"use client";
import React from "react";
import Hero from "../../../components/Hero";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
const NotFound = () => {
  const router = useRouter();
  const params = useParams();
  console.log(params);
  return (
    <>
      <Navbar />
      <Hero>
        <div className="flex flex-col justify-center items-center text-stone-300">
          <h1 className="text-5xl font-bold p-5 ">{params}</h1>
          <button
            type="button"
            className="btn btn-wide text-stone-300"
            onClick={() => router.back()}
          >
            go back
          </button>
        </div>
      </Hero>
    </>
  );
};

export default NotFound;
