"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import logo from "../public/logo.svg";
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "../utils/utilsFrontend";
import autoAnimate from "@formkit/auto-animate";

const MainPage = () => {
  const [username, setUsername] = useState("");
  const [server, setServer] = useState("NA");
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
  const { data, isLoading, error } = useSWR(
    `/api/challengers/${server}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  return (
    <div className="flex justify-center mb-20 flex-col w-full h-full items-center">
      <div className="pb-72 md:pb-16">
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
          <div className="form-control dropdown dropdown-top md:dropdown-bottom w-full">
            <input
              type="text"
              tabIndex={0}
              placeholder="Summoner's name"
              className="input input-bordered w-auto backdrop-blur-sm bg-opacity-50"
              value={username}
              onChange={handleTextChange}
              onKeyDown={handleKeyDown}
            />
            <ul
              tabIndex={0}
              className="dropdown-content md:mt-2 mb-2 menu p-0 shadow bg-base-100 rounded-box w-full backdrop-blur-sm bg-opacity-30"
            >
              <li className="pl-2 select-none">
                {server} | Highest ranked players
              </li>
              {isLoading
                ? Array(5)
                    .fill()
                    .map((_, i) => (
                      <li key={i} className="animate-pulse ">
                        <div className="rounded-full animate-pulse p-1.5 m-4 w-1/3 bg-gray-200 bg-opacity-30">
                          <div className="rounded-full "></div>
                        </div>
                      </li>
                    ))
                : data?.challengers
                    .filter((challenger) =>
                      challenger.toLowerCase().includes(username.toLowerCase())
                    )
                    .slice(0, 5)
                    .map((challenger, i) => (
                      <li key={i}>
                        <Link href={`/${server}/${challenger}`}>
                          {challenger}
                        </Link>
                      </li>
                    ))}
            </ul>
          </div>
        </div>
        <Link
          className="btn w-full md:w-6/12 xl:w-1/12 backdrop-blur-sm bg-opacity-50"
          href={`/${server}/${username}`}
        >
          search
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default MainPage;
