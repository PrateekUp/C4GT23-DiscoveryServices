import React from "react";
import Card from "./card";

const body = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-8 justify-evenly align-middle">
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="flex justify-center align-middle py-2">
          <Card key={index} index={index + 1} />
        </div>
      ))}
    </div>
  );
};

export default body;
