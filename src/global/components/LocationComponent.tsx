import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LocationComponent: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleLocationClick = () => {
    setOpen(true);
  };

  const handleSendLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        // Send the location data to your server or do something with it
      },
      (error) => {
        console.error(error);
      }
    );
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleLocationClick} startIcon={<LocationOnIcon />}>
        Share Location
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Share Location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to share your location?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSendLocation}>Yes</Button>
          <Button onClick={() => setOpen(false)}>No</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LocationComponent;
