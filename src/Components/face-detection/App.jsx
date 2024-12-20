import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "./Utilities.js";
import * as fp from "fingerpose";

// Import gesture images
import victory from "../face-detection/public/victory.jpg";
import thumbs_up from "../face-detection/public/thumb_up.jpg";
import hello from "../face-detection/public/hello.png";
import ok from "../face-detection/public/ok.webp";
import letterAImage from "../face-detection/public/A.jpeg"; 
import { helloGesture, okGesture,victoryGesture } from './GestureDescription.jsx';
import { letterA } from './GestureDescription.jsx';
function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const [currentGesture, setCurrentGesture] = useState(null);
  const [isWebcamActive, setIsWebcamActive] = useState(true); 

  // Add new images for gestures
  const images = { thumbs_up, victory, hello, ok,A: letterAImage  };

  const runHandpose = async () => {
    await tf.setBackend("webgl");
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    detect(net);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;
  
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
  
      const hand = await net.estimateHands(video);
  
      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          victoryGesture,
          fp.Gestures.ThumbsUpGesture,
          helloGesture,
          okGesture,
          letterA,
        ]);
  
        const gesture = await GE.estimate(hand[0].landmarks, 6.5); // Set higher confidence threshold
        if (gesture.gestures && gesture.gestures.length > 0) {
          // Find the gesture with the highest confidence score
          const maxConfidenceGesture = gesture.gestures.reduce(
            (prev, curr) => (prev.score > curr.score ? prev : curr)
          );
  
          // Apply a confidence threshold for stability
          if (maxConfidenceGesture.score > 7.5) {
            setEmoji(maxConfidenceGesture.name);
            setCurrentGesture(maxConfidenceGesture.name);
          } else {
            setEmoji(null); // Reset if no gesture is above threshold
          }
        }
      }
  
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
    requestAnimationFrame(() => detect(net));
  };
  
  

  const handleStopWebcam = () => {
    setIsWebcamActive(false);
  };

  const handleStartWebcam = () => {
    setIsWebcamActive(true);
  };

  useEffect(() => {
    if (isWebcamActive) {
      runHandpose();
    }
  }, [isWebcamActive]);

  useEffect(() => {
    if (currentGesture) {
      console.log(`User is showing: ${currentGesture}`);
    }
  }, [currentGesture]);

  return (
    <div className="App">
      <header className="App-header">
        {isWebcamActive && (
          <Webcam
            ref={webcamRef}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zIndex: 9,
              width: 640,
              height: 400,
            }}
          />
        )}

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 400,
          }}
        />

        {emoji && (
          <img
            src={images[emoji]}
            alt={`Emoji gesture: ${emoji}`}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              zIndex: 10,
              bottom: 500,
              right: 50,
              textAlign: "center",
              height: 100,
            }}
          />
        )}

        {currentGesture && (
          <p
            style={{
              position: "absolute",
              right: 50,
              top: 240,
              textAlign: "right",
              fontSize: 20,
              color: "white",
            }}
          >
            Current Gesture: {currentGesture}
          </p>
        )}
{/* Buttons for controlling the webcam */}
<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
  <button
    onClick={handleStopWebcam}
    className="px-2 py-2 m-2  bg-red-600 text-white rounded-lg hover:bg-red-700"
  >
    Stop 
  </button>
  <button
    onClick={handleStartWebcam}
    className="px-2 py-2 m-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
  >
   Generate Text
  </button>
</div>

      </header>
    </div>
  );
}

export default App;
