import React, { useRef, useState } from "react";
import Compressor from "compressorjs";

const VoiceChat: React.FC = () => {
  const [audioBlob, setAudioBlob] = useState<any | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);

  const handleStartRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/wav" });
        setAudioBlob(blob);
      };

      mediaRecorder.start();
      setIsRecording(true);

      setTimeout(() => {
        mediaRecorder.stop();
        setIsRecording(false);
      }, 5000); // Record for 5 seconds
    });
  };

  const handlePauseRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.pause();
      setIsRecording(false);
    }
  };

  const handleResumeRecording = () => {
    if (mediaRecorderRef.current && !isRecording) {
      mediaRecorderRef.current.resume();
      setIsRecording(true);
    }
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

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.src = URL.createObjectURL(audioBlob);
      audioRef.current.play();
    }
  };

  const handleLogBuffer = () => {
    console.log(chunksRef.current);
  };

  return (
    <div>
      <button onClick={handleStartRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={handlePauseRecording} disabled={!isRecording}>
        Pause Recording
      </button>
      <button onClick={handleResumeRecording} disabled={isRecording}>
        Resume Recording
      </button>
      <button onClick={handleConvertAndUpload}>Convert and Upload</button>
      <button onClick={handlePlayAudio} disabled={!audioBlob}>
        Play Audio
      </button>
      <button onClick={handleLogBuffer}>Log Buffer</button>
      <audio ref={audioRef} controls />
    </div>
  );
};

export default VoiceChat;
