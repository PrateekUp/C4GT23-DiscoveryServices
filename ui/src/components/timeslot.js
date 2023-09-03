import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";

function Showtimes({ times }) {
  const [selectedTime, setSelectedTime] = useState(null);
  const [open, setOpen] = useState(false);

  const handleTimeClick = (slot) => {
    setSelectedTime(slot);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTime(null);
  };

  return (
    <div>
      <div className="flex space-x-4">
        {times.map((slot, index) => (
          <Button
            key={index}
            variant="contained"
            color="success"
            onClick={() =>
              handleTimeClick(
                new Date(slot.fulfillment.startTime).toLocaleTimeString(
                  "en-US",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )
              )
            }
          >
            {new Date(slot.fulfillment.startTime).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
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
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button onClick={handleClose} color="success">
            Book
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Showtimes;
