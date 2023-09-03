import React from "react";
import { useContext } from "react";
import SearchContext from "./contextsearch";
import Card from "./card";

const Body = () => {
  const { apiResponse, showResults } = useContext(SearchContext);
  if (!showResults || !apiResponse) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-8 justify-evenly align-middle">
      {apiResponse.data.rooms.map((room) => (
        <div className="flex justify-center align-middle py-2">
          <Card key={room.room.id} data={room} />
        </div>
      ))}
    </div>
  );
};

export default Body;
