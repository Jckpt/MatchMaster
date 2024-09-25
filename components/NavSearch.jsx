"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL } from "../utils/baseURL";
const NavSearch = () => {
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
      router.push(`${BASE_URL}/${server}/${encodeURIComponent(username)}`);
    }
  };
  return (
    <>
      <select
        className="select select-bordered w-4/12 max-w-xs"
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
      <div className="form-control mr-4">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-auto"
          value={username}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default NavSearch;
