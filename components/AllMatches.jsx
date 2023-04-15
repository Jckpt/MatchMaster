"use client";
import React, { Suspense } from "react";
import NoMatches from "./NoMatches";
import LoadMore from "./LoadMore";
import Match from "./Match";
import useSWR from "swr";
import { fetcher } from "../utils/utilsFrontend";

const AllMatches = ({ username, server }) => {
  const { data, error } = useSWR(
    `/api/summoner/${server}/${username}?start=0`,
    fetcher
  );
  const matches = data?.matchesHistory;
  return (
    <>
      {matches !== null ? (
        <>
          {matches?.map((match, i) => (
            <Match key={i} match={match} server={server} />
          ))}
          <LoadMore username={username} server={server} />
        </>
      ) : (
        <NoMatches />
      )}
    </>
  );
};

export default AllMatches;
