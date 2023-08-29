import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Checkbox, FormControlLabel, TextField, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

function ExpandableFilter() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [checkedState, setCheckedState] = useState({
    filter1: false,
    filter2: false,
    filter3: false,
    filter4: false,
    filter5: false,
  });

  const [by, setBy] = useState("");

  const handleChange = (event) => {
    setBy(event.target.value);
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
          <div className="flex md:flex-row flex-col justify-around mx-4 my-4">
            {" "}
            <TextField
              fullWidth
              label="Location"
              variant="outlined"
              style={{ marginRight: "inherit" }}
            />
            {/* <hr className="h-8" /> */}
            <FormControl fullWidth className="mt-4">
              <InputLabel id="demo-simple-select-label">Capacity</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={by}
                label="Capacity"
                onChange={handleChange}
                style={{ marginRight: "inherit", marginBottom: "auto" }}
              >
                <MenuItem value={`less than 50`}>less than 50</MenuItem>
                <MenuItem value={`50 -100`}>50 -100</MenuItem>
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

export default ExpandableFilter;
