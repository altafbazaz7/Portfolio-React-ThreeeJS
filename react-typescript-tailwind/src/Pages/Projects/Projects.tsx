import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
const TravelImg = require('../../Assets/travel.jpg')
const NoteImg = require('../../Assets/blog.jpg')



const Projects = () => {
  const [show, setShow] = useState(false);


 
  useEffect(() => {
    setShow(true);
  }, []);
  const dataArr = [ 
    {
      link :'https://travellers-mern.vercel.app/ ',
      title: <a href='https://travellers-mern.vercel.app/' target='_blank'>Travel Agency</a>,
      image:TravelImg,
      tags: ["react.js", "node.js", "express.js", "mongoDB", "firebase"]
    },
    {link: 'https://note-app-mern-frontend.vercel.app/',
      title:  <a href='https://note-app-mern-frontend.vercel.app/' target='_blank'>Note App</a>,
      image:NoteImg,
      tags: ["react.js", "node.js", "express.js", "mongoDB"]
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
      return <Card type={"PROJECTS"} data={curElem} key={index} />;
    })}
  </div>
  
  )
}

export default Projects
