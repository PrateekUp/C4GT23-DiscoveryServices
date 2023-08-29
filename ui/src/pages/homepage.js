import React from "react";
import Header from "../components/header";
import Search from "../components/search";
import Button from "@mui/material/Button";
import Body from "../components/body";

const homepage = () => {
  return (
    <>
      <div className="h-full w-full bg-[#ECF9FF]">
        <div className="min-h-screen mx-auto px-4 sm:px-6 lg:px-8 max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl font-sans">
          <Header />
          <Search />
          <Body />
        </div>
      </div>
    </>
  );
};

export default homepage;
