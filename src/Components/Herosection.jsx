import React, { useEffect, useRef, useState } from 'react';
import DOTS from 'vanta/dist/vanta.dots.min.js';
import * as THREE from 'three'; // Ensure THREE.js is available by importing it

const Herosection = () => {
  const [vantaEffect, setVantaEffect] = useState(null); // Track the Vanta effect instance
  const vantaRef = useRef(null); // Reference for the DOM element

  useEffect(() => {
    if (!vantaEffect) { // Only initialize Vanta once
      setVantaEffect(DOTS({
        el: vantaRef.current, // Attach effect to this DOM element
        THREE: THREE, // Pass the imported THREE.js instance
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x18549a,
        color2: 0xf4f5f7,
        backgroundColor: 0xfff8f8,
      }));
    }

    // Clean up the Vanta effect on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="relative w-full h-screen">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black bg-opacity-50">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Hero Section</h1>
       
      </div>
    </div>
  );
};

export default Herosection;



