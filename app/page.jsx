"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Hero from "../components/Hero";
const page = () => {
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
    <Hero>
      <select
        className="select select-bordered w-1/12 max-w-xs"
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
      <div className="form-control w-6/12">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-auto"
          value={username}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </Hero>
  );
};

export default page;
