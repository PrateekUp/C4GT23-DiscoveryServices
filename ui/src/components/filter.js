import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Checkbox, FormControlLabel, TextField, Box } from "@mui/material";

function ExpandableFilter() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [checkedState, setCheckedState] = useState({
    filter1: false,
    filter2: false,
    filter3: false,
  });

  const handleCheckboxChange = (event) => {
    setCheckedState({
      ...checkedState,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div>
      <div className="flex flex-row text-center align-middle justify-center p-4">
        <span>More Filters</span>
        <FilterListIcon
          fontSize="medium"
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ cursor: "pointer" }}
        />
      </div>

      {isExpanded && (
        <Box mt={2}>
          <TextField
            fullWidth
            label="Search"
            variant="outlined"
            className="mb-4"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={checkedState.filter1}
                onChange={handleCheckboxChange}
                name="filter1"
              />
            }
            label="Filter 1"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedState.filter2}
                onChange={handleCheckboxChange}
                name="filter2"
              />
            }
            label="Filter 2"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedState.filter3}
                onChange={handleCheckboxChange}
                name="filter3"
              />
            }
            label="Filter 3"
          />
        </Box>
      )}
    </div>
  );
}

export default ExpandableFilter;
