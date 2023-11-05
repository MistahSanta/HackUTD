"use client";
import React, { useState, useEffect, useRef } from "react";
import { BsCamera } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import Webcam from "react-webcam";

function Camera() {
  const [cameraOn, setCameraOn] = useState(false);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 500,
    height: 220,
    facingMode: "user",
  };

  const startCamera = async () => {
    setCameraOn(true);
    console.log("webcamRef.current: " + webcamRef.current);
    if (webcamRef.current) {
      setTimeout(async () => {
        const processFrame = async () => {
          const screenshot = webcamRef.current.getScreenshot();

          if (screenshot) {
            const formData = new FormData();
            formData.append("screenshot", screenshot);

            try {
              const response = await fetch("http://127.0.0.1:5000/analyze", {
                method: "POST",
                body: formData,
              });
              const data = await response.json();
              console.log(data);

              // Update UI with the emotion data (data.final_prediction)
            } catch (error) {
              console.error("Error:", error);
            }
          }

          // Continue processing frames as long as the camera is on
          if (cameraOn) {
            requestAnimationFrame(processFrame);
          }
        };

        requestAnimationFrame(processFrame);
      }, 1000); // Add a 1 second delay before capturing the first screenshot
    }
  };

  const stopCamera = () => {
    setCameraOn(false);
    if (webcamRef.current) {
      const videoStream = webcamRef.current.video.srcObject;
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
            ref={webcamRef}
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
