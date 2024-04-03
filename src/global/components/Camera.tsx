import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const Camera = () => {
  const webcamRef = useRef<Webcam | any>(null);
  const [mediaType, setMediaType] = useState<string | null>(null);
  const [mediaBlob, setMediaBlob] = useState<string | Blob | null | any>(null);

  const captureImage = () => {
    setMediaType("image");
    const imageSrc = webcamRef?.current?.getScreenshot();
    setMediaBlob(imageSrc);
  };

  const startRecording = () => {
    setMediaType("video");
    webcamRef.current?.startRecording();
  };

  const stopRecording = () => {
    webcamRef.current?.stopRecording();
    const chunks = webcamRef.current?.getRecordedBlob();
    setMediaBlob(chunks ? chunks[0] : null);
  };

  const renderMedia = () => {
    if (mediaType === "image" && typeof mediaBlob === "string") {
      return <img src={mediaBlob} alt="Captured" />;
    } else if (mediaType === "video" && mediaBlob instanceof Blob) {
      return (
        <video controls>
          <source src={URL.createObjectURL(mediaBlob)} />
        </video>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <Webcam
        audio={true}
        ref={webcamRef}
        width={640}
        height={480}
        screenshotFormat="image/jpeg"
      />
      <button onClick={captureImage}>Capture Image</button>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      {renderMedia()}
    </>
  );
};

export default Camera;
