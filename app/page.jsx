import React from "react";
import Hero from "../components/Hero";
import MainPage from "../components/MainPage";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            League Match History
          </Link>
        </div>
      </div>
      <Hero>
        <MainPage />
      </Hero>
    </>
  );
};

export default page;
