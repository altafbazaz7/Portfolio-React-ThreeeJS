import {
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaAws,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

import "./Skills.css";
import { useEffect, useState } from "react";

const Skills = () => {
  const handleMouseMove = () => {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon: any) => {
      const randomX = (Math.random() * 2 - 1) * 50; // Generate a random value between -20 and 20 for X direction
      const randomY = (Math.random() * 2 - 1) * 40; // Generate a random value between -20 and 20 for Y direction
      icon.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`;
    });
  };
  
  const handleMouseLeave = () => {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon: any) => {
      icon.style.transform = "none";
    });
  };

  window.onload = () => {
    handleMouseMove();
  };

  const [show, setShow] = useState(false);


 
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
    className={`skills-container h-screen flex gap-10 justify-center items-center  text-center transform transition-transform duration-500 ${
      show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
    }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <FaHtml5 className="icon html" />
      <FaCss3 className="icon css" />
      <FaJsSquare className="icon js" />
      <SiTypescript className="icon typescript" />
      <FaReact className="icon react" />
      <DiNodejs className="icon node" />
      <SiExpress className="icon express" />
      <SiMongodb className="icon mongodb" />
      <SiMysql className="icon mysql" />

      <FaAws className="icon aws" />
    </div>
  );
};

export default Skills;
