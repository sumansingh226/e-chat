import React, { useRef, useState } from "react";
import Compressor from "compressorjs";

const VoiceChat: React.FC = () => {
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStartRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      let chunks: BlobPart[] = [];

      mediaRecorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/wav" });
        setAudioBlob(blob);
      };

      mediaRecorder.start();
      setTimeout(() => {
        mediaRecorder.stop();
      }, 5000); // Record for 5 seconds
    });
  };

  const handleConvertAndUpload = () => {
    if (!audioBlob) {
      console.error("No audio to convert and upload");
      return;
    }

    new Compressor(audioBlob, {
      quality: 0.6, // Adjust quality as needed
      success: (compressedBlob) => {
        // Handle the compressed blob here
        console.log("Compressed blob:", compressedBlob);
        // Upload the compressed blob to the server
        // Code for this part will be in the backend (Node.js)
      },
      error: (error) => {
        console.error("Compression error:", error);
      },
    });
  };

  return (
    <div>
      <button onClick={handleStartRecording}>Start Recording</button>
      <button onClick={handleConvertAndUpload}>Convert and Upload</button>
      <audio ref={audioRef} controls />
    </div>
  );
};

export default VoiceChat;
