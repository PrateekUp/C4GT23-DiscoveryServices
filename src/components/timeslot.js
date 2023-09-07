import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Showtimes({ times }) {
  const [selectedTime, setSelectedTime] = useState(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [slotsState, setSlotsState] = useState(times);

  const handleTimeClick = (slot, itemId, fulfillmentId) => {
    setSelectedTime({
      time: new Date(slot.fulfillment.startTime).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      itemId,
      fulfillmentId,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTime(null);
  };

  const handleBooking = async () => {
    const payload = {
      itemId: selectedTime.itemId,
      fulfillmentId: selectedTime.fulfillmentId,
      type: "room",
      // name: name,
      // email: email,
      // phone: phone,
    };

    try {
      const response = await axios.post(
        "https://dev.elevate-apis.shikshalokam.org/karmayogi-bap/dsep/confirm",
        payload,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGY4NTgwMGJiOGU1ZmQ0MDMxYjA0ZWMiLCJpYXQiOjE2OTM5OTcwNTYsImV4cCI6MTY5NDA4MzQ1Nn0.1s7VFxRenuPrpG8Wm99uo1kGPNzqtZ1hwj8kABXpeFQWtN1G4y6SRJIT6UQzNKZwKNMPYxNl--BU--Fa9NwaDZKz-5sNLVQhqHHZyPSr7h7mMkOTDrXW-JpZp6_VHmZnQwvmLNL8zKro9tts6JDK5KvtV9Izuvp0uGX2GYggjgxktMmYk2uHwCOfLTUQZNaTphAP11Ex9OOp4h9SB7_l2XfEg0FDqXQtuvbLYPXgRRr-K5ht9ZXBwH3MZ9ZMfNpxRrlTd7phJ4Zd9brku3wLWODOa3IAxxmqIAw4hX8A5XIHwtx3X6MKUBh9idk6u-iCbjMSmnYgaGKwbsNIwvvOEA",
          },
        }
      );

      console.log(response.data);
      if (response.data.status === true) {
        toast.success("Booking successful");
        const updatedSlots = slotsState.map((slot) => {
          if (
            slot.item.id === selectedTime.itemId &&
            slot.fulfillment.id === selectedTime.fulfillmentId
          ) {
            return {
              ...slot,
              fulfillment: {
                ...slot.fulfillment,
                booked: true,
              },
            };
          }
          return slot;
        });
        setSlotsState(updatedSlots);
      } else {
        toast.error("Booking failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("We are facing some issues. Please try again later");
    }

    // console.log(payload);
  };

  return (
    <div>
      <div className="flex space-x-4">
        {slotsState.map((slot, index) => (
          <Button
            key={index}
            variant="contained"
            color={slot.fulfillment.booked ? "secondary" : "success"}
            disabled={slot.fulfillment.booked}
            onClick={() => {
              if (!slot.fulfillment.booked) {
                handleTimeClick(slot, slot.item.id, slot.fulfillment.id);
              }
            }}
          >
            {new Date(slot.fulfillment.startTime).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Button>
        ))}
      </div>
      <ToastContainer />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Book for {selectedTime?.time}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Email Address"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Phone Number"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleClose();
              handleBooking();
            }}
            color="success"
          >
            Book
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Showtimes;
