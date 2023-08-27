import React from "react";
import Header from "../components/header";
import Detail from "../components/detail";

const booking = () => {
  return (
    <>
      <div className="h-full w-full bg-cyan-100">
        <div className="min-h-screen mx-auto px-4 sm:px-6 lg:px-8 max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl font-sans">
          <Header />
          <Detail />
        </div>
      </div>
    </>
  );
};

export default booking;
