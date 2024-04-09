import React, { useState, useEffect } from "react";
import Peer, { SignalData } from "simple-peer";
import io from "socket.io-client";

interface ScreenShareProps {}

const ScreenShare: React.FC<ScreenShareProps> = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [socket, setSocket] = useState<null | any>(null);
  const [peer, setPeer] = useState<Peer.Instance | null>(null);

  useEffect(() => {
    const getScreenStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: false,
        });
        setStream(stream);
      } catch (error) {
        console.error("Error accessing screen stream:", error);
      }
    };

    getScreenStream();

    const socket = io("http://localhost:5000"); // Replace with your signaling server URL
    setSocket(socket);

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (socket && stream) {
      socket.on("connect", () => {
        console.log("Socket connected");
      });

      socket.on("signal", (data: SignalData) => {
        if (data.type === "offer") {
          const newPeer = new Peer({
            initiator: false,
            trickle: false,
            stream,
          });
          newPeer.signal(data);
          setPeer(newPeer);
        } else if (data.type === "answer" && peer) {
          peer.signal(data);
        }
      });

      const newPeer = new Peer({ initiator: true, trickle: false, stream });
      newPeer.on("signal", (data) => {
        socket.emit("signal", data);
      });
      setPeer(newPeer);
    }
  }, [socket, stream, peer]);

  return (
    <div>
      {stream && (
        <video
          autoPlay
          controls
          style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          srcObject={stream}
        ></video>
      )}
    </div>
  );
};

export default ScreenShare;
