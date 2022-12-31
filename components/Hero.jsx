import React from "react";

const Hero = ({ children }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default Hero;
