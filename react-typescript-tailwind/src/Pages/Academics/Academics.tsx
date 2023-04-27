import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
const RIMT = require('../../Assets/rimt.png')
const DBU = require('../../Assets/dbu.png')
const UOK = require('../../Assets/uok.png')




const Academics = () => {
  const [show, setShow] = useState(false);


 
  useEffect(() => {
    setShow(true);
  }, []);
  const dataArr = [ 
    {
      link :'https://travellers-mern.vercel.app/ ',
      title: <a href='https://travellers-mern.vercel.app/' target='_blank'>PhD ECE</a>,
      image:RIMT,
      tags: ["2023-present"]
    },
    {link: 'https://note-app-mern-frontend.vercel.app/',
      title:  <a href='https://note-app-mern-frontend.vercel.app/' target='_blank'>MTech ECE</a>,
      image:DBU,
      tags: ["2020-2022"]
    },
    {link: 'https://note-app-mern-frontend.vercel.app/',
    title:  <a href='https://note-app-mern-frontend.vercel.app/' target='_blank'>BTech ECE</a>,
    image:UOK,
    tags: ["2016-2020"]
  }
  ]
  return (
    <div
    className={`h-screen flex gap-10 justify-center items-center  text-center transform transition-transform duration-00 ${
      show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
    }`}
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      transition: "all 0.3s ease-in-out",
      opacity: show ? 1 : 0,
      zIndex: show ? 999 : -1,
    }}
  >
    {dataArr.map((curElem, index) => {
      return <Card type={"ACADEMICS"} data={curElem} key={index} />;
    })}
  </div>
  
  )
}

export default Academics
