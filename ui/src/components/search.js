import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Search = () => {
  const [by, setBy] = useState("");

  const handleChange = (event) => {
    setBy(event.target.value);
  };

  return (
    <main className="container mx-auto">
      <div className="bg-green-100 p-8 rounded shadow-md">
        <h2 className="text-2xl mb-2">SEARCH YOUR ROOM</h2>
        <hr className="h-px my-2 w-64 mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className=" flex flex-col md:flex-row mb-4">
          <div className="flex-1 mr-2 px-8">
            <label className="block text-gray-700 mb-2" htmlFor="searchby">
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
          <div className="flex-1 mr-2 px-8">
            <label className="block text-gray-700 mb-2" htmlFor="destination">
              What are you looking for?
            </label>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Your Destination"
              variant="outlined"
            />
          </div>
          <div className="flex-1 mr-2 px-8">
            <label className="block text-gray-700 mb-2" htmlFor="destination">
              Hey
            </label>
            {/* <DatePicker defaultValue={dayjs("2022-04-17")} /> */}
            <TextField
              fullWidth
              id="outlined-basic"
              label="Your Destination"
              variant="outlined"
            />
          </div>
        </div>

        <div>
          <span
            className="text-red-700 text-md hover:text-xl text-center justify-center ease-out cursor-pointer"
            // onClick={handleClick}
          >
            More Filters
          </span>
        </div>
        <div className="flex space-x-4">
          <button className="flex-1 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Search
          </button>
          <button className="flex-1 bg-gray-300 p-2 rounded hover:bg-gray-400">
            Clear
          </button>
        </div>
      </div>
    </main>
  );
};

export default Search;
