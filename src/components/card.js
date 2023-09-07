import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, CardActionArea, CardActions } from "@mui/material";

function getFacilityName(facility) {
  switch (facility) {
    case "ac":
      return "Air Conditioner";
    case "wifi":
      return "Wifi";
    case "parking":
      return "Parking";
    case "smartclass":
      return "Smart-Class";
    default:
      return "Catering Service";
  }
}
export default function MultiActionAreaCard({ data }) {
  const { bpp, room, slots } = data;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/details/${room.id}`, {
      state: { roomDetails: room, slots: slots, bpp: bpp },
    });
  };
  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleButtonClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={room.image}
          alt="green iguana"
        />
        <CardContent>
          <div className="absolute top-0 right-0 bg-green-500 text-black font-bold text-xs px-4 py-2 rounded-bl-md">
            {bpp.id}
          </div>
          <Typography gutterBottom variant="h5" component="div">
            {room.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className="text-gray-500 text-lg font-semibold uppercase tracking-wider "
          >
            {room.institute}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {room.description}
          </Typography>
          <div className="mt-2">
            <LocationOnIcon style={{ marginRight: "8px" }} />
            {room.state}
          </div>
          <div className="flex flex-wrap space-x-1 my-1">
            {room.facilities.map((facility, index) => (
              <span
                key={index}
                className="bg-black text-white text-sm px-2 py-1 my-1 rounded"
              >
                {getFacilityName(facility)}
              </span>
            ))}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          color="success"
          onClick={handleButtonClick}
        >
          Proceed to Book
        </Button>
      </CardActions>
    </Card>
  );
}
