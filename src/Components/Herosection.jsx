import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import ShuffleHero from  '../Components/ShuffleHero' 

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Herosection = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #3B4450 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-600 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
      
        <ShuffleHero />
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={1000} factor={4} fade speed={3} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Herosection;
