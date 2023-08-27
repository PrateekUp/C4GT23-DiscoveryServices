import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";

function Showtimes() {
  const [selectedTime, setSelectedTime] = useState(null);
  const [open, setOpen] = useState(false);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTime(null);
  };

  const times = ["1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"]; // sample showtimes

  return (
    <div>
      <h2>Select a Showtime</h2>
      <div className="flex space-x-4">
        {times.map((time, index) => (
          <Button
            key={index}
            variant="contained"
            color="primary"
            onClick={() => handleTimeClick(time)}
          >
            {time}
          </Button>
        ))}
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Book for {selectedTime}</DialogTitle>
        <DialogContent>
          <TextField margin="dense" label="Name" fullWidth />
          <TextField margin="dense" label="Email Address" fullWidth />
          <TextField margin="dense" label="Phone Number" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Book
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Showtimes;
