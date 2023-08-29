import React from "react";
import Showtimes from "./timeslot";
import Carousel from "./carousel/carousel";

const detail = () => {
  //
  const images = [
    "https://images.unsplash.com/photo-1693170509455-f28aefcd1005?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1693048925857-3255f0b544d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    // "https://example.com/image3.jpg",
    // ... other image URLs
  ];
  return (
    <>
      <div className="flex flex-col h-max bg-green-200 p-8 rounded shadow-md mt-8">
        <h1 className="font-bold text-[#18122B] text-2xl">Card Title</h1>
        <h2 className="text-gray-400 text-lg font-semibold uppercase">
          Hogwarts
        </h2>
        <hr className="h-px my-2 w-64 mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="w-full h-[50vh] p-8">
          <Carousel images={images} />
        </div>
        {/* items */}
        <h2 className="text-xl font-bold text-wrap">Description</h2>
        <hr className="h-px my-2 w-64 mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <h4 className="mb-4">
          As of my last update in September 2021, the paper "BERT-ERC:
          Fine-tuning BERT is Enough for Emotion Recognition in Conversation"
          does not exist in my database. It's possible that the paper was
          published after my last update or it could be a hypothetical or
          less-known paper. However, based on the title and typical practices in
          NLP, I can provide a general idea about what such a paper might
          discuss:
        </h4>
        <h2 className="text-xl font-bold text-wrap mt-2"> Location </h2>
        <hr className="h-px my-2 w-64 mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <h4>Platform 9.3/4, LONDON</h4>
        <h2 className="text-xl font-bold text-wrap mt-2"> Available Slots </h2>
        <hr className="h-px my-2 w-64 mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <Showtimes />
      </div>
    </>
  );
};

export default detail;
