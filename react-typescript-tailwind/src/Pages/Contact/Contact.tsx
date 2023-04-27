import React, { useState } from 'react'
import Map from '../../Components/Map/Map'
import { Typewriter } from 'react-simple-typewriter';

const Contact = () => {
    const [words, setWords] = useState([
        'Phone -> +91-7006026155',
        'Email -> arslaanaftaab7@gmail.com',
        'LinkedIn -> https://linkedin.com/mohammadaltafbazaz',
        'Ping Me :)'
      ]);
  return (
<div className="flex flex-col">
       <Map/>
  

      <div className="flex-column justify-center items-center h-screen w-screen bg-gray-800 text-center">
        <h3 className="text-white text-3xl pt-5">
          <Typewriter
            words={words}
            loop
            cursor
            typeSpeed={100}
            deleteSpeed={1}
          />
          </h3>
          </div>
</div>
  )
}

export default Contact
