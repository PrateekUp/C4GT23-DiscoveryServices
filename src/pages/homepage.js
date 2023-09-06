import React from "react";
import { useState } from "react";
import Header from "../components/header";
import Search from "../components/search";
// import Button from "@mui/material/Button";
import Body from "../components/body";
import SearchContext from "../components/contextsearch";
// import Footer from "../components/footer";

const Homepage = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [showResults, setShowResults] = useState(false);
  return (
    <>
      <div className="h-full w-full bg-[#ECF9FF]">
        <div className="min-h-screen mx-auto px-4 sm:px-6 lg:px-8 max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl font-sans">
          <Header />
          <SearchContext.Provider
            value={{ apiResponse, setApiResponse, showResults, setShowResults }}
          >
            <Search />
            <Body />
          </SearchContext.Provider>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Homepage;
