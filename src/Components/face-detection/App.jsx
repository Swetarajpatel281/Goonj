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
// import  A from "../face-detection/public/A/0.jpg"
// import B from "../face-detection/public/B/0.jpg"
// import C from "../face-detection/public/C/0.jpg"
// import D from "../face-detection/public/D/0.jpg"
// import E from "../face-detection/public/E/0.jpg"
// import F from "../face-detection/public/F/0.jpg"
// import letterG from "../face-detection/public/B/0.jpg"
import {helloGesture, okGesture} from './GestureDescription.jsx'
// , letterA, letterB, letterC, letterD, letterE

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const [currentGesture, setCurrentGesture] = useState(null);

  // Add new images for gestures
  const images = { 
    thumbs_up, victory, 
    hello, ok,
    // A,B,C,D,E,F,
  };

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
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
          helloGesture, 
          okGesture,
          // letterA,
          // letterB,
          // letterC,
          // letterD,
          // letterE
         
        ]);

        const gesture = await GE.estimate(hand[0].landmarks, 4);

        if (gesture.gestures && gesture.gestures.length > 0) {
          const maxConfidence = gesture.gestures.reduce(
            (prev, curr) => (prev.confidence > curr.confidence ? prev : curr)
          );

          setEmoji(maxConfidence.name); 
          setCurrentGesture(maxConfidence.name); 
        }
      }

      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
    requestAnimationFrame(() => detect(net));
  };

  useEffect(() => {
    runHandpose();
  }, []);

  useEffect(() => {
    if (currentGesture) {
      console.log(`User is showing: ${currentGesture}`); 
    }
  }, [currentGesture]);

  return (
    <div className="App">
      <header className="App-header">
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
            height: 480,
          }}
        />

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
            height: 480,
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
      </header>
    </div>
  );
}

export default App;
