import React from "react";

const MatchSkeleton = () => {
  return (
    <div className="card shadow-xl animate-pulse backdrop-blur-sm bg-opacity-50 mb-3 w-full bg-base-200">
      <div className="card-body pt-2 md:pl-2 md:pr-2 pb-2 pl-0 pr-0 text-stone-300">
        <div className="flex flex-row pr-1 pl-1 justify-between items-center h-6">
          <div className="flex flex-row justify-between items-center">
            <div className="mr-2 rounded-full bg-opacity-40 bg-gray-200 h-2.5 w-24"></div>
            <div className="mr-2 rounded-full bg-opacity-40 bg-gray-200 h-2.5 w-16"></div>
            <div className="mr-2 rounded-full bg-opacity-40 bg-gray-200 h-2.5 w-16"></div>
          </div>
          <div className="mr-2 rounded-full bg-opacity-40 bg-gray-200 h-2.5 w-24"></div>
        </div>
        <div className="w-full h-1 rounded-md bg-opacity-40 bg-gray-200"></div>
        <div className="flex items-center justify-around">
          <div className="flex flex-row items-center h-14">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full mr-2">
                <div className="scale-115 w-12 h-12 bg-opacity-40 bg-gray-200"></div>
              </div>
            </div>
            <div className="flex flex-col h-full justify-around">
              <div className="avatar rounded">
                <div className="rounded bg-opacity-40 bg-gray-200 w-6 h-6"></div>
              </div>
              <div className="avatar rounded">
                <div className="rounded bg-opacity-40 bg-gray-200 w-6 h-6"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center h-8 flex-col">
            <div className="mr-2 rounded-full bg-opacity-40 bg-gray-200 h-2.5 w-14"></div>
            <div className="mr-2 rounded-full bg-opacity-40 bg-gray-200 h-2.5 w-16"></div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="grid-cols-3 grid gap-1 w-30">
              <div className="avatar w-8 h-8">
                <div className="w-8 h-8 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
              <div className="avatar w-8 h-8">
                <div className="w-8 h-8 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
              <div className="avatar w-8 h-8">
                <div className="w-8 h-8 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
              <div className="avatar w-8 h-8">
                <div className="w-8 h-8 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
              <div className="avatar w-8 h-8">
                <div className="w-8 h-8 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
              <div className="avatar w-8 h-8">
                <div className="w-8 h-8 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
            </div>
            <div className="avatar hidden md:flex w-8 h-8">
              <div className="avatar w-8 h-8">
                <div className="w-8 h-8 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col grid-rows-5 h-[125px]">
            <div className="pr-1 hidden md:flex flex-row items-center">
              <div className="avatar">
                <div className="w-6 h-6 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
              <div className="ml-1 w-14 rounded-full bg-opacity-40 bg-gray-200 h-2"></div>
            </div>
            <div className="pr-1 hidden md:flex flex-row items-center">
              <div className="avatar">
                <div className="w-6 h-6 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
              <div className="ml-1 w-14 rounded-full bg-opacity-40 bg-gray-200 h-2"></div>
            </div>
            <div className="pr-1 hidden md:flex flex-row items-center">
              <div className="avatar">
                <div className="w-6 h-6 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
              <div className="ml-1 w-14 rounded-full bg-opacity-40 bg-gray-200 h-2"></div>
            </div>
            <div className="pr-1 hidden md:flex flex-row items-center">
              <div className="avatar">
                <div className="w-6 h-6 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
              <div className="ml-1 w-14 rounded-full bg-opacity-40 bg-gray-200 h-2"></div>
            </div>
            <div className="pr-1 hidden md:flex flex-row items-center">
              <div className="avatar">
                <div className="w-6 h-6 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
              <div className="ml-1 w-14 rounded-full bg-opacity-40 bg-gray-200 h-2"></div>
            </div>
            <div className="pr-1 hidden md:flex flex-row items-center">
              <div className="avatar">
                <div className="w-6 h-6 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
              <div className="ml-1 w-14 rounded-full bg-opacity-40 bg-gray-200 h-2"></div>
            </div>
            <div className="pr-1 hidden md:flex flex-row items-center">
              <div className="avatar">
                <div className="w-6 h-6 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
              <div className="ml-1 w-14 rounded-full bg-opacity-40 bg-gray-200 h-2"></div>
            </div>
            <div className="pr-1 hidden md:flex flex-row items-center">
              <div className="avatar">
                <div className="w-6 h-6 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
              <div className="ml-1 w-14 rounded-full bg-opacity-40 bg-gray-200 h-2"></div>
            </div>
            <div className="pr-1 hidden md:flex flex-row items-center">
              <div className="avatar">
                <div className="w-6 h-6 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
              <div className="ml-1 w-14 rounded-full bg-opacity-40 bg-gray-200 h-2"></div>
            </div>
            <div className="pr-1 hidden md:flex flex-row items-center">
              <div className="avatar">
                <div className="w-6 h-6 rounded bg-opacity-40 bg-gray-200"></div>
              </div>
              <div className="ml-1 w-14 rounded-full bg-opacity-40 bg-gray-200 h-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchSkeleton;
