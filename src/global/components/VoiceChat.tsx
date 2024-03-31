import React, { useRef, useState } from "react";

const VoiceChat: React.FC = () => {
  const [audioBlob, setAudioBlob] = useState<any | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
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
    });
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && (isRecording || isPaused)) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
    }
  };

  const handlePauseRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.pause();
      setIsRecording(false);
      setIsPaused(true);
    }
  };

  const handleResumeRecording = () => {
    if (mediaRecorderRef.current && isPaused) {
      mediaRecorderRef.current.resume();
      setIsRecording(true);
      setIsPaused(false);
    }
  };

  const handleSendData = () => {
    if (!audioBlob) {
      console.error("No audio to send");
      return;
    }

    const userId = "your_user_id"; // Replace "your_user_id" with the actual user ID
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour12: true,
    });
    const fileName = `recording-${currentDate}-${currentTime}-${userId}.wav`;

    const formData = new FormData();
    formData.append("audio", audioBlob, fileName);
    formData.append("fileName", fileName);
    formData.append("fileType", audioBlob.type);
    formData.append("fileSize", audioBlob.size.toString());
    console.log("formData", JSON.stringify(formData));
    formData.forEach((value, key) => {
      console.log(key, value);
    });
    // Simulate sending data to the backend
    // Replace this with your actual API call
    fetch("your-api-url", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data sent to the backend:", data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  const handlePlayAudio = () => {
    if (audioRef.current && audioBlob) {
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
      <button
        onClick={handleStopRecording}
        disabled={!isRecording && !isPaused}
      >
        Stop
      </button>
      <button onClick={handlePauseRecording} disabled={!isRecording}>
        Pause
      </button>
      <button onClick={handleResumeRecording} disabled={!isPaused}>
        Resume
      </button>
      <button onClick={handleSendData} disabled={!audioBlob}>
        Send
      </button>
      <button onClick={handlePlayAudio} disabled={!audioBlob}>
        Play
      </button>
      <button onClick={handleLogBuffer}>Log Buffer</button>
      <audio ref={audioRef} controls />
    </div>
  );
};

export default VoiceChat;
