import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Cuboid from '../../ThreeJS/Cuboid';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const [words, setWords] = useState([
    'Hey there,I\'m Altaf & I am a...',
    '<> Full Stack Developer </>',
    'Welcome to my Portfolio'
  ]);

  return (
    <>
      <div className="flex-column justify-center items-center h-screen w-screen bg-gray-800 text-center">
        <h3 className="text-white text-9xl pt-5">
          <Typewriter
            words={words}
            loop
            cursor
            typeSpeed={50}
            deleteSpeed={20}
          />
        </h3>
        <Cuboid />
      </div>
    </>
  );
};

export default Home;
