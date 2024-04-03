import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Button, Grid } from "@mui/material";

const PictureTaker = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imageSrc, setImageSrc] = useState<any | null>(null);

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImageSrc(imageSrc);
  };

  const sendPicture = async () => {
    if (!imageSrc) return;

    // Send imageSrc to the backend
    console.log("Sending picture:", imageSrc);

    // Clear the imageSrc state
    setImageSrc(null);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640}
          height={480}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={capture}>
          Capture
        </Button>
        <Button variant="contained" onClick={sendPicture} disabled={!imageSrc}>
          Send
        </Button>
      </Grid>
      {imageSrc && (
        <Grid item xs={12}>
          <img src={imageSrc} alt="Captured" />
        </Grid>
      )}
    </Grid>
  );
};

export default PictureTaker;
