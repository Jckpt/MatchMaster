import React from "react";

const Hero = ({ children }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full h-full">{children}</div>
    </div>
  );
};

export default Hero;
