"use client";
import useSWR from "swr";
import React from "react";
import { useState } from "react";
import Match from "./Match";
import { BASE_URL } from "../utils/baseURL";

const fetcher = (path) => fetch(`${BASE_URL}${path}`).then((res) => res.json());

function LoadMore({ server, username }) {
  const [count, setCount] = useState(1);
  const pages = [];
  for (let i = 1; i < count; i++) {
    pages.push(<Page index={i} key={i} server={server} username={username} />);
  }
  return (
    <>
      {pages}
      <button onClick={() => setCount(count + 1)}>Load More</button>
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
    return <div>Loading...</div>;
  }
  console.log(data.matchesHistory);
  return data?.matchesHistory?.map((match, i) => (
    <div key={i}>{match.matchId}</div>
  ));
}
export default LoadMore;
