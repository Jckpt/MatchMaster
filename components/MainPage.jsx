"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import logo from "../public/logo.svg";
import Image from "next/image";
const MainPage = () => {
  const [username, setUsername] = useState("");
  const [server, setServer] = useState("EUW");
  const router = useRouter();

  const handleTextChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSelect = (e) => {
    setServer(e.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      router.push(`${server}/${username}`);
    }
  };
  return (
    <div className="flex justify-center flex-col w-full h-full items-center">
      <div className="pb-16">
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex justify-center w-full h-full gap-4 flex-col items-center xl:flex-row">
        <div className="flex w-full md:w-6/12 gap-4">
          <select
            className="select select-bordered backdrop-blur-sm bg-opacity-70"
            value={server}
            onChange={handleSelect}
          >
            <option>EUW</option>
            <option>EUNE</option>
            <option>NA</option>
            <option>OCE</option>
            <option>KR</option>
            <option>BR</option>
            <option>JP</option>
            <option>NA</option>
            <option>LAS</option>
            <option>LAN</option>
            <option>RU</option>
            <option>TR</option>
          </select>
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Summoner's name"
              className="input input-bordered w-auto backdrop-blur-sm bg-opacity-50"
              value={username}
              onChange={handleTextChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <Link
          className="btn w-full md:w-6/12 xl:w-1/12 backdrop-blur-sm bg-opacity-50"
          href={`/${server}/${username}`}
        >
          search
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
