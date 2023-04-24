"use client";
import React, { Suspense } from "react";
import NoMatches from "./NoMatches";
import LoadMore from "./LoadMore";
import Match from "./Match";
import useSWR from "swr";
import { fetcher } from "../utils/utilsFrontend";
import MatchSkeleton from "./MatchSkeleton";

const AllMatches = ({ username, server }) => {
  const { data, isLoading, error } = useSWR(
    `/api/summoner/${server}/${username}?start=0`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  const matches = data?.matchesHistory;
  return (
    <>
      {matches !== null ? (
        <>
          {isLoading
            ? Array(10)
                .fill()
                .map((_, i) => <MatchSkeleton key={i} />)
            : matches?.map((match, i) => (
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
