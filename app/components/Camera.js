"use client";
import React, { useState, useRef, useContext } from "react";
import { BsCamera } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { EmotionContext } from "../Context/MotionContext";

function Camera() {
  const [cameraOn, setCameraOn] = useState(false);
  const { emotion, setEmotion } = useContext(EmotionContext);

  const videoRef = useRef(null);

  const startCamera = async () => {
    setCameraOn(true);

    const sendFrameToBackend = async (frame) => {
      const formData = new FormData();
      formData.append("screenshot", frame);

      try {
        const response = await fetch("http://127.0.0.1:5000/analyze", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setEmotion(data.final_prediction);
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const processFrame = async () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (videoRef.current) {
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL("image/jpeg");

        await sendFrameToBackend(dataURL);

        // Continue processing frames as long as the camera is on
        if (cameraOn) {
          requestAnimationFrame(processFrame);
        }
      }
    };

    requestAnimationFrame(processFrame);
  };

  const stopCamera = () => {
    setCameraOn(false);
    setEmotion("");
  };

  return (
    <div>
      {!cameraOn ? (
        <BsCamera size={"40px"} onClick={startCamera} />
      ) : (
        <div className="flex flex-col gap-5">
          <video
            ref={videoRef}
            autoPlay
            muted
            width={5}
            height={5}
            onUserMediaError={(error) => console.log("Webcam error: ", error)}
          />
          <div className="flex gap-5 mx-auto">
            <IoMdCloseCircle size={"40px"} onClick={stopCamera} />
          </div>
        </div>
      )}
      <h2 className="text-[1.5rem] mt-5"> Your emotion today: {emotion} </h2>
    </div>
  );
}

export default Camera;
