import React from "react";
import Card from "./card";

const body = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 justify-center align-middle">
      {Array.from({ length: 10 }).map((_, index) => (
        <Card key={index} index={index + 1} />
      ))}
    </div>
  );
};

export default body;
