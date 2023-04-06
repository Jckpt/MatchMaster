"use client";
import React from "react";
import NoMatches from "./NoMatches";
import LoadMore from "./LoadMore";
import Match from "./Match";
import useSWR from "swr";
import { getMatchHistory } from "../utils/matchHistory";
import { BASE_URL } from "../utils/baseURL";
const fetcher = (path) => fetch(`${BASE_URL}${path}`).then((res) => res.json());

const AllMatches = ({ username, server }) => {
  const { data, error } = useSWR(
    `/api/summoner/${server}/${username}?start=0`,
    fetcher
  );
  console.log(data);
  const matches = data?.matchesHistory;
  return (
    <>
      {matches !== null ? (
        <div>
          {matches?.map((match, i) => (
            <Match key={i} match={match} />
          ))}
          <LoadMore username={username} server={server} />
        </div>
      ) : (
        <NoMatches />
      )}
    </>
  );
};

export default AllMatches;
