import React from "react";
import { useState } from "react";
import Filter from "./filter";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Add from "@mui/material/Icon";

import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Search = () => {
  const [by, setBy] = useState("");

  const handleChange = (event) => {
    setBy(event.target.value);
  };

  return (
    <main className="container mx-auto">
      <div className="bg-green-200 p-8 rounded shadow-md">
        <h2 className="text-2xl text-center text-[#352F44] font-roboto font-bold">
          SEARCH YOUR ROOM
        </h2>
        <hr className="w-32 h-1 mx-auto border-0 mb-8 mt-2 rounded md:mt-4 dark:bg-gray-700 " />
        <div className=" flex flex-col md:flex-row">
          <div className="flex-1 mr-2 px-8 mb-4">
            <label className="block text-[#352F44] mb-2" htmlFor="searchby">
              How do you want to search?
            </label>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Search By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={by}
                label="Search By"
                onChange={handleChange}
              >
                <MenuItem value={`Room`}>Room</MenuItem>
                <MenuItem value={`Training Institute`}>
                  Training Institute
                </MenuItem>
                {/* <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          </div>
          <div className="flex-1 mr-2 px-8 mb-4">
            <label className="block text-[#352F44] mb-2" htmlFor="destination">
              What are you looking for?
            </label>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Your Destination"
              variant="outlined"
            />
          </div>
          <div className="flex-1 mr-2 px-8 mb-4">
            <label className="block text-[#352F44] mb-2" htmlFor="destination">
              When are you looking?
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          </div>
        </div>
        <div className="flex w-full justify center align-middle mb-4 mx-2 px-8">
          <Filter />
        </div>
        <div className="flex space-x-32">
          <button className="flex-1 bg-blue-400 text-white p-2 rounded hover:bg-blue-700">
            Search
          </button>
          <button className="flex-1 bg-red-300 p-2 rounded hover:bg-red-500">
            Clear
          </button>
        </div>
      </div>
    </main>
  );
};

export default Search;
