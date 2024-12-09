import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import img1 from '../assests/img1.gif'
import img2 from '../assests/img2.jpeg'
import img3 from '../assests/img3.webp'
import img4 from '../assests/img4.jpg'
import img5 from '../assests/img5.jpg'
import img6 from '../assests/img6.png'
import img7 from '../assests/img7.webp'
import img8 from '../assests/img8.avif'
import img9 from '../assests/img9.jpg'

const ShuffleHero = () => {
  return (
    <section className="w-full px-4 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-300 font-medium">
        Unlock Your Potential with Every Step
        </span>
        <h3 className="text-3xl md:text-5xl font-semibold">
        Join us on a journey of transformation and growth.
        </h3>
        <p className="text-base md:text-lg text-slate-100 my-4 md:my-6">
        "Whether you're seeking to enhance your skills or embrace a healthier lifestyle, our classes are designed for every aspiration. Experience expert guidance, a supportive community, and the tools you need to succeed. The only limit is your imagination—let's make it happen together!"
        </p>
        <a href="/signup" className="bg-gray-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-green-700 active:scale-95">
        Start Your Journey Today
        </a>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
    {
      id: 1,
      src: img1,  // Remove the curly braces
    },
    {
      id: 2,
      src: img2,
    },
    {
      id: 3,
      src: img3,
    },
    {
      id: 4,
      src: img4,
    },
    {
      id: 5,
      src: img5,
    },
    {
      id: 6,
      src: img6,
    },
    {
      id: 7,
      src: img7,
    },
    {
      id: 8,
      src: img8,  // If you have imported this too, include it
    },
    {
      id: 9,
      src: img9,  // If you have imported this too, include it
    },
  ];
  

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;