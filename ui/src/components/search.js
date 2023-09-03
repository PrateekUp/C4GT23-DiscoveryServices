import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import SearchContext from "./contextsearch";
// import Filter from "./filter";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Checkbox, FormControlLabel, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Filter({
  by,
  setBy,
  capacity,
  setCapacity,
  checkedState,
  setCheckedState,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  // const [checkedState, setCheckedState] = useState({
  //   filter1: false,
  //   filter2: false,
  //   filter3: false,
  //   filter4: false,
  //   filter5: false,
  // });

  // const [by, setBy] = useState("");

  const handledropdownChange = (event) => {
    setBy(event.target.value);
  };
  const handlecapacityChange = (event) => {
    setCapacity(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setCheckedState({
      ...checkedState,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex flex-row text-center align-middle justify-center p-8">
        <span>More Filters</span>
        <FilterListIcon
          fontSize="medium"
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ cursor: "pointer", marginLeft: "10px" }}
        />
      </div>

      {isExpanded && (
        <Box className="mx-8 flex flex-col justify-between align-middle px-4 my-1">
          <div className="flex md:flex-row flex-col justify-around mx-4 my-4 gap-4">
            {" "}
            <FormControl fullWidth className="mt-4">
              <InputLabel id="demo-simple-select-label">Location</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={by}
                label="Location"
                onChange={handledropdownChange}
                // style={{ marginRight: "inherit", marginBottom: "auto" }}
              >
                <MenuItem value={`Bihar`}>Bihar</MenuItem>
                <MenuItem value={`Delhi`}>Delhi</MenuItem>
                <MenuItem value={`Harayana`}>Harayana</MenuItem>
                <MenuItem value={`Karnataka`}>Karnataka</MenuItem>
                <MenuItem value={`Maharashtra`}>Maharashtra</MenuItem>
                <MenuItem value={`Uttar Pradesh`}>Uttar Pradesh</MenuItem>
                <MenuItem value={`Tamil Nadu`}>Tamil Nadu</MenuItem>
                <MenuItem value={`West Bengal`}>West Bengal</MenuItem>
              </Select>
            </FormControl>
            {/* <hr className="h-8" /> */}
            <FormControl fullWidth className="mt-4">
              <InputLabel id="demo-simple-select-label">Capacity</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={capacity}
                label="Capacity"
                onChange={handlecapacityChange}
                style={{ marginRight: "inherit", marginBottom: "auto" }}
              >
                <MenuItem value={`less than 50`}>less than 50</MenuItem>
                <MenuItem value={`50 - 100`}>50 - 100</MenuItem>
                <MenuItem value={`100 - 200`}>100 - 200</MenuItem>
                <MenuItem value={`more than 200`}>more than 200</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex w-full lg:flex-row flex-col justify-evenly align-middle">
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.filter1}
                  onChange={handleCheckboxChange}
                  name="filter1"
                />
              }
              label="Wifi availability"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.filter2}
                  onChange={handleCheckboxChange}
                  name="filter2"
                />
              }
              label="Smart Class"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.filter3}
                  onChange={handleCheckboxChange}
                  name="filter3"
                />
              }
              label="Air Condition"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.filter4}
                  onChange={handleCheckboxChange}
                  name="filter4"
                />
              }
              label="Parking"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedState.filter5}
                  onChange={handleCheckboxChange}
                  name="filter5"
                />
              }
              label="Catering Services"
            />
          </div>
        </Box>
      )}
    </div>
  );
}

const Search = () => {
  const { setApiResponse, setShowResults } = useContext(SearchContext);
  const [by, setBy] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  // States for the Filter component
  const [location, setLocation] = useState(""); // For Location dropdown
  const [capacity, setCapacity] = useState(""); // For Capacity dropdown
  const [checkedState, setCheckedState] = useState({
    filter1: false,
    filter2: false,
    filter3: false,
    filter4: false,
    filter5: false,
  });

  const handleChange = (event) => {
    setBy(event.target.value);
  };

  const handledestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const resetValues = () => {
    setBy("");
    setDestination("");
    setSelectedDate(null);
    setLocation("");
    setCapacity("");
    setCheckedState({
      filter1: false,
      filter2: false,
      filter3: false,
      filter4: false,
      filter5: false,
    });
    setShowResults(false);
    setApiResponse(null);
  };

  const handleSearch = async () => {
    const filters = {
      filter1: "wifi",
      filter2: "smart-class",
      filter3: "ac",
      filter4: "parking",
      filter5: "catering",
    };
    const facilities = Object.keys(checkedState)
      .filter((key) => checkedState[key])
      .map((key) => filters[key])
      .filter(Boolean);

    const formattedDate = selectedDate
      ? dayjs(selectedDate).format("YYYY-MM-DD")
      : "";
    let upperCapacity;
    switch (capacity) {
      case "less than 50":
        upperCapacity = "50";
        break;
      case "50 - 100":
        upperCapacity = "100";
        break;
      case "100 - 200":
        upperCapacity = "200";
        break;
      default:
        upperCapacity = "500";
    }
    const payload = {
      [by === "Room" ? "roomName" : "instituteName"]: destination,
      type: by.toLowerCase(),
      filter: {
        state: location,
        facilities: facilities,
        date: formattedDate,
        capacity: upperCapacity,
      },
    };
    console.log(payload);
    setShowResults(true);
    setApiResponse({
      status: true,
      message: "Search Success",
      data: {
        count: "1",
        rooms: [
          {
            bpp: {
              bpp_id: "https://dev.elevate-apis.shikshalokam.org/bpp",
              bpp_uri: "https://dev.elevate-apis.shikshalokam.org/bpp",
            },
            room: {
              id: "6480d3b262820fd9e6bf0978",
              name: "Muse's Music Room",
              state: "Bihar",
              capacity: "50",
              facilities: ["ac", "wifi", "smart-class", "catering", "parking"],
              image:
                "https://loremflickr.com/640/480/abstract?random=u0ssiug3w2",
              institute: "FITJEE",
              description:
                "This is the eighth video in the series of System Design Primer Course. We talk about one more important component of System Design: Caching. We want software engineers and aspiring software engineers to develop basics and get ready for the world of interviews as well as excelling as a Software Engineer.",
            },
            slots: [
              {
                item: {
                  id: "6480d3aca8cc31fe6f2709b4",
                },
                fulfillment: {
                  id: "ecacbbad-8c9b-47c8-ae6c-35ae2efbbcc5",
                  startTime: "2023-03-01T03:30:00",
                  endTime: "2023-03-01T04:30:00",
                  timeZone: "Asia/Calcutta",
                },
              },
              {
                item: {
                  id: "6480d3aca8cc31fe6f270d8f",
                },
                fulfillment: {
                  id: "65675af2-a9ed-4de3-9abe-555ac2476b4b",
                  startTime: "2023-03-01T04:30:00",
                  endTime: "2023-03-01T05:30:00",
                  timeZone: "Asia/Calcutta",
                },
              },
            ],
          },
          {
            bpp: {
              bpp_id: "https://dev.elevate-apis.shikshalokam.org/bpp",
              bpp_uri: "https://dev.elevate-apis.shikshalokam.org/bpp",
            },
            room: {
              id: "6480d3b262820fd9e6bf0978",
              name: "Kalam",
              state: "Delhi",
              capacity: "50",
              facilities: ["ac", "wifi", "smart-class", "catering", "parking"],
              image:
                "https://loremflickr.com/640/480/abstract?random=u0ssiug3w2",
              institute: "FITJEE",
              description:
                "This is the eighth video in the series of System Design Primer Course. We talk about one more important component of System Design: Caching. We want software engineers and aspiring software engineers to develop basics and get ready for the world of interviews as well as excelling as a Software Engineer.",
            },
            slots: [
              {
                item: {
                  id: "6480d3aca8cc31fe6f2709b4",
                },
                fulfillment: {
                  id: "ecacbbad-8c9b-47c8-ae6c-35ae2efbbcc5",
                  startTime: "2023-03-01T03:30:00",
                  endTime: "2023-03-01T04:30:00",
                  timeZone: "Asia/Calcutta",
                },
              },
              {
                item: {
                  id: "6480d3aca8cc31fe6f270d8f",
                },
                fulfillment: {
                  id: "65675af2-a9ed-4de3-9abe-555ac2476b4b",
                  startTime: "2023-03-01T04:30:00",
                  endTime: "2023-03-01T05:30:00",
                  timeZone: "Asia/Calcutta",
                },
              },
            ],
          },
          {
            bpp: {
              bpp_id: "https://dev.elevate-apis.shikshalokam.org/bpp",
              bpp_uri: "https://dev.elevate-apis.shikshalokam.org/bpp",
            },
            room: {
              id: "6480d3b262820fd9e6bf0978",
              name: "BiggBoss",
              state: "Kerala",
              capacity: "50",
              facilities: ["ac", "wifi", "smart-class", "catering", "parking"],
              image:
                "https://loremflickr.com/640/480/abstract?random=u0ssiug3w2",
              institute: "FITJEE",
              description:
                "This is the eighth video in the series of System Design Primer Course. We talk about one more important component of System Design: Caching. We want software engineers and aspiring software engineers to develop basics and get ready for the world of interviews as well as excelling as a Software Engineer.",
            },
            slots: [
              {
                item: {
                  id: "6480d3aca8cc31fe6f2709b4",
                },
                fulfillment: {
                  id: "ecacbbad-8c9b-47c8-ae6c-35ae2efbbcc5",
                  startTime: "2023-03-01T03:30:00",
                  endTime: "2023-03-01T04:30:00",
                  timeZone: "Asia/Calcutta",
                },
              },
              {
                item: {
                  id: "6480d3aca8cc31fe6f270d8f",
                },
                fulfillment: {
                  id: "65675af2-a9ed-4de3-9abe-555ac2476b4b",
                  startTime: "2023-03-01T04:30:00",
                  endTime: "2023-03-01T05:30:00",
                  timeZone: "Asia/Calcutta",
                },
              },
            ],
          },
        ],
      },
    });
    // console.log(showResults);

    // try {
    //   const response = await axios.post(
    //     "https://dev.elevate-apis.shikshalokam.org/osl-bap/dsep/search",
    //     payload
    //   );
    //   setApiResponse(response.data);
    // setShowResults(true);
    // } catch (error) {
    //   console.error("There was an error sending the request", error);
    // }
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
              onChange={handledestinationChange}
            />
          </div>
          <div className="flex-1 mr-2 px-8 mb-4">
            <label className="block text-[#352F44] mb-2" htmlFor="destination">
              When are you looking?
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={selectedDate}
                onChange={(newDate) => setSelectedDate(newDate)}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="flex w-full justify center align-middle mb-4 mx-2 px-8">
          <Filter
            by={location}
            setBy={setLocation}
            capacity={capacity}
            setCapacity={setCapacity}
            checkedState={checkedState}
            setCheckedState={setCheckedState}
          />
        </div>
        <div className="flex space-x-32">
          <button
            onClick={handleSearch}
            className="flex-1 bg-blue-400 text-white p-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
          <button
            onClick={resetValues}
            className="flex-1 bg-red-300 p-2 rounded hover:bg-red-500"
          >
            Clear
          </button>
        </div>
      </div>
    </main>
  );
};

export default Search;
