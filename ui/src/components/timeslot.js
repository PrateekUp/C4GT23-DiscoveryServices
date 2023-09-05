import React, { useState } from "react";
// import axios from "axios";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
      name: name,
      email: email,
      phone: phone,
    };

    // try {
    //   const response = await axios.post(
    //     "https://dev.elevate-apis.shikshalokam.org/osl-bap/dsep/confirm",
    //     payload,
    //     {
    //       headers: {
    //         Authorization:
    //           "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGVmMjQwYTExNGY5YThlMWVmYzNmNDMiLCJpYXQiOjE2OTM4OTY3NDEsImV4cCI6MTY5Mzk4MzE0MX0.Bg0zyQ1ESTNUVmc1gPv3Q-nut_YxETJoMEH1GYqxYKBR7CSAk3QLni_Hwpk8zeFSkA0EczwwrBbvhx9dVDf9owj3XNEU_vKtJ69X-LrcI5YdStQsSroxCv-UR-tg2TVqPCw1Co_AcDFfIUg6_MVUyagopDO1i5V-rS088KEPJur6y8NFMWkGkuZEs-sDIAm3frLd007erso77XcwvuI9J1jTh0pf6c1A5L8eo4FNua82PQjRBta2T7QIPXoXh2bQSQexbL2ewF7LnfcL72_jgae8-N4GYG2qa3iI51sYnMKONYFmf-utT5pS-5ulGdflzXvJI7HOC3QFjZ3-P4Rxrw",
    //       },
    //     }
    //   );

    //   console.log(response.data);
    // } catch (error) {
    //   console.error("Error:", error);
    // }

    console.log(payload);
  };

  return (
    <div>
      <div className="flex space-x-4">
        {times.map((slot, index) => (
          <Button
            key={index}
            variant="contained"
            color={slot.fulfillment.booked ? "default" : "success"}
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
