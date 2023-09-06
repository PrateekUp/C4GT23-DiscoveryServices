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
    };

    try {
      const response = await axios.post(
        "https://dev.elevate-apis.shikshalokam.org/karmayogi-bap/dsep/confirm",
        payload,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NGY3MDFlNTNiOGU1NTJkNGM5ZTU2ZDkiLCJpYXQiOjE2OTM5MDk0NzcsImV4cCI6MTY5Mzk5NTg3N30.PKy470m5ZQ6qAJc2fnaVZHYZU6ElM4UnZ8Fva0jiQjJVmK04MaCDT1oa1LIOt97I_RF5W6C2wDjF6qVFXC94pEI_qDdRFgR7odPYS596yMyq7--DJXKPxdCkrfqSquNRFW9cC6t3F2JweZpANNM3NEpOQOra-pyunHbkUQ2PdfKSp893U70QfTYapcBFUWyorPhe_N8czLM-FDONDCXTd2WMeQW7WI9ju7q7GKY5t_x7dWRCfUj_4vJe-5Hq_xRoyEgsXvlxTt9XvcW4GqBqm9t5Glc7_saX9HD7OmJx7O5JkPhTTpv6tPHc8rSM0XhQm6jUbLX6TqfsrE9jV1M6yA",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }

    console.log(payload);
  };

  return (
    <div>
      <div className="flex space-x-4">
        {times.map((slot, index) => (
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
