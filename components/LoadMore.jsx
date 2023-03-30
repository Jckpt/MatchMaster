"use client";
import useSWR from "swr";
import React from "react";
import { useState } from "react";
import Match from "./Match";
import { getMoreMatches } from "../utils/getMoreMatches";
const LoadMore = ({ username, server }) => {
  const [cnt, setCnt] = useState(1);
  const pages = [];
  for (let i = 1; i < cnt; i++) {
    pages.push(<Page username={username} server={server} index={i} key={i} />);
  }
  return (
    <>
      {pages}
      <button onClick={() => setCnt(cnt + 1)}>Load More</button>
    </>
  );
};
function Page({ username, server, index }) {
  console.log(index * 10);
  const { data, isLoading, isError } = getMoreMatches(
    index * 10,
    username,
    server,
    false
  );
  // ... handle loading and error states
  console.log(data);
  return data.lol.player.matchesHistory.matches.map((match, i) => (
    <Match key={i} match={match} />
  ));
}
export default LoadMore;
