import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, CardActionArea, CardActions } from "@mui/material";

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
