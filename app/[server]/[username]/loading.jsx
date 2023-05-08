import React from "react";
import Hero from "../../../components/Hero";
import Navbar from "../../../components/Navbar";
import MatchSkeleton from "../../../components/MatchSkeleton";
const Loading = () => {
  return (
    <>
      <meta
        name="description"
        content="MatchMaster - League of Legends match history app"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo-isolated.svg" />
      <Navbar />
      <Hero>
        <div className="flex flex-col w-full h-full">
          <div className="w-full flex flex-col lg:flex-row h-full">
            <div className="flex flex-col justify-start w-full lg:w-2/5 lg:h-full lg:mr-4">
              {/* Profile */}
              <Profile />
              {/* Rank */}
              <div className="card animate-pulse w-full mb-4 bg-base-200 backdrop-blur-sm bg-opacity-50 shadow-xl">
                <div className="card-body flex-col justify-center">
                  {Array(3)
                    .fill()
                    .map((_, i) => (
                      <Rank key={i} />
                    ))}
                </div>
              </div>
              {/* Most Played */}
              <div className="card w-full animate-pulse mb-4 bg-base-200 backdrop-blur-sm bg-opacity-50 shadow-xl">
                <div className="card-body">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <MostPlayed key={i} />
                    ))}
                </div>
              </div>
              {/* <Rank username={username} server={server} />
              <MostPlayed username={username} server={server} /> */}
            </div>
            <div className="lg:w-3/5 flex flex-col items-center">
              {Array(10)
                .fill()
                .map((_, i) => (
                  <MatchSkeleton key={i} />
                ))}
            </div>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default Loading;

const Profile = () => {
  return (
    <div className="card animate-pulse w-full mb-4 bg-base-200 backdrop-blur-sm bg-opacity-50 shadow-xl">
      <div className="card-body flex justify-center items-center">
        <div className="avatar">
          <div className="rounded-full w-[104px] h-[104px] border-4 border-[#9c98d8]">
            <div className="bg-[#9c98d8] opacity-30 w-full h-full"></div>
          </div>
        </div>
        <div className="rounded-full bg-opacity-40 bg-[#9c98d8] h-4 w-28"></div>
      </div>
    </div>
  );
};

const Rank = () => {
  return (
    <>
      <div className="flex flex-row m-2">
        <div className="avatar mr-1">
          <div className="rounded-full w-20 h-20">
            <div className="bg-[#9c98d8] opacity-30 w-full h-full"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="rounded-full bg-opacity-40 bg-[#9c98d8] h-2.5 m-1 w-28"></div>
          <div className="flex flex-row m-1 mt-3">
            <div className="rounded-full bg-opacity-40 bg-[#9c98d8] h-2.5 mr-2 w-20"></div>
            <div className="rounded-full bg-opacity-40 bg-[#9c98d8] h-2.5 w-10"></div>
          </div>
          <span className="capitalize flex justify-between m-1 mt-3">
            <div className="rounded-full bg-opacity-40 bg-[#9c98d8] h-2.5 w-12"></div>
            <div className="rounded-full bg-opacity-40 bg-[#9c98d8] h-2.5 w-12"></div>
            <div className="rounded-full bg-opacity-40 bg-[#9c98d8] h-2.5 w-10"></div>
          </span>
          <div className="rounded-full bg-opacity-40 bg-[#9c98d8] mt-1 h-1 w-40"></div>
        </div>
      </div>
    </>
  );
};
const MostPlayed = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <div className="bg-[#9c98d8] opacity-30 w-full h-full"></div>
          </div>
        </div>
        <div className="pl-2 flex flex-col">
          <div className="rounded-full bg-opacity-40 bg-[#9c98d8] m-1 h-2.5 w-12"></div>
          <div className="rounded-full bg-opacity-40 bg-[#9c98d8] m-1 h-2.5 w-14"></div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="rounded-full bg-opacity-40 bg-[#9c98d8] m-1 h-2.5 w-20"></div>
        <div className="rounded-full bg-opacity-40 bg-[#9c98d8] m-1 h-2.5 w-16"></div>
      </div>
      <div className="flex flex-col items-end">
        <div className="rounded-full bg-opacity-40 bg-[#9c98d8] m-1 h-2.5 w-8"></div>
        <div className="rounded-full bg-opacity-40 bg-[#9c98d8] m-1 h-2.5 w-12"></div>
      </div>
    </div>
  );
};
