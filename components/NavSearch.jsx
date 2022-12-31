"use client";
import React from "react";
import { useState } from "react";
const NavSearch = () => {
  const [username, setUsername] = useState("");
  const [selectedServer, setSelectedServer] = useState(0);
  const handleTextChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSelect = (e) => {
    setSelectedServer(e.target.value);
  };
  return (
    <>
      <select
        className="select select-bordered w-4/12 max-w-xs"
        value={selectedServer}
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
        />
      </div>
    </>
  );
};

export default NavSearch;
