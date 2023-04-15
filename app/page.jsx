import React from "react";
import Hero from "../components/Hero";
import MainPage from "../components/MainPage";
import Link from "next/link";
import logo from "../public/logo-isolated.svg";
import Image from "next/image";
const page = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <Image src={logo} height={32} alt="logo" />
          </Link>
        </div>
      </div>
      <Hero className="flex flex-col">
        <MainPage />
      </Hero>
    </>
  );
};

export default page;
