"use client";
import useSWR from "swr";
import React from "react";
import { useState } from "react";
import Match from "./Match";
import { fetcher } from "../utils/utilsFrontend";
import MatchSkeleton from "./MatchSkeleton";
function LoadMore({ server, username }) {
  const [count, setCount] = useState(1);
  const pages = [];
  for (let i = 1; i < count; i++) {
    pages.push(<Page index={i} key={i} server={server} username={username} />);
  }
  return (
    <>
      {pages}
      <button className="btn btn-wide" onClick={() => setCount(count + 1)}>
        Load More
      </button>
    </>
  );
}

function Page({ index, server, username }) {
  const { data, error } = useSWR(
    `/api/summoner/${server}/${username}?start=${index * 10}`,
    fetcher
  );

  if (error) {
    return <div>There was an error fetching data.</div>;
  }

  if (!data) {
    return Array(10)
      .fill()
      .map((_, i) => <MatchSkeleton key={i} />);
  }
  return data?.matchesHistory?.map((match, i) => (
    <Match key={i} match={match} />
  ));
}
export default LoadMore;
