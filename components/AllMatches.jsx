"use client";
import React, { Suspense } from "react";
import NoMatches from "./NoMatches";
import LoadMore from "./LoadMore";
import Match from "./Match";
import useSWR from "swr";
import { fetcher } from "../utils/utilsFrontend";
import MatchSkeleton from "./MatchSkeleton";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const AllMatches = ({ username, server }) => {
  const { data, isLoading, error } = useSWR(
    `/api/summoner/${server}/${username}?start=0`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  const matches = data?.matchesHistory;
  return (
    <div className="lg:w-3/5 flex flex-col items-center" ref={parent}>
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
    </div>
  );
};

export default AllMatches;
