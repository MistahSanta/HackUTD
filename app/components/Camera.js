"use client";
import React, { useState, useEffect } from "react";
import { BsCamera } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import Webcam from "react-webcam";

function Camera() {
  const [cameraOn, setCameraOn] = useState(false);
  const [webcamRef, setWebcamRef] = useState(null);

  const videoConstraints = {
    width: 500,
    height: 220,
    facingMode: "user",
  };

  const startCamera = () => {
    setCameraOn(true);
  };

  const stopCamera = () => {
    setCameraOn(false);
    if (webcamRef) {
      const videoStream = webcamRef.video.srcObject;
      if (videoStream) {
        videoStream.getTracks().forEach((track) => track.stop());
      }
    }
  };

  useEffect(() => {
    return () => {
      stopCamera(); // This will be called when the component is unmounted
    };
  }, []);

  return (
    <div>
      {!cameraOn ? (
        <BsCamera size={"40px"} onClick={startCamera} />
      ) : (
        <div className="flex flex-col gap-5">
          <Webcam
            audio={false}
            height={220}
            screenshotFormat="image/jpeg"
            width={550}
            videoConstraints={videoConstraints}
            onUserMediaError={(error) => console.log("Webcam error: ", error)}
            ref={setWebcamRef}
          />
          <div className="flex gap-5 mx-auto">
            <IoMdCloseCircle size={"40px"} onClick={stopCamera} />
            <h2> Your emotion: </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Camera;
