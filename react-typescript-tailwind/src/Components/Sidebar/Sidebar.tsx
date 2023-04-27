import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";
import { PortfolioState } from "../../ContextAPI/ContextApi";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [show, setShow] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);
  const [active, setActive] = useState("");
  const [funcHandler, setfuncHandler] = useState(null);
  const [pathname, setPathname] = useState("");

  const navigate = useNavigate();

  const handleClick = (index: number | any, item: any) => {
    setActiveIcon(index);
    setActive(item.label); // Set the active state with the item label
    const labelChecker = () => {
      if (item.label === "Home") {
        navigate(`/`);
      } else {
        navigate(`${item.label}`);
      }
    };
    labelChecker();
  };

  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    console.log(active, "active");
  }, [navigate]);
  const icons = [
    {
      icon: <FaHome />,
      label: "Home",
      color: active === "Home" ? "white" : "silver",
    },
    {
      icon: <FaUser />,
      label: "About",
      color: active === "About" ? "white" : "silver",
    },
    {
      icon: <FaProjectDiagram />,
      label: "Projects",
      color: active === "Projects" ? "white" : "silver",
    },
    {
      icon: <FaGraduationCap />,
      label: "Academics",
      color: active === "Academics" ? "white" : "silver",
    },
    {
      icon: <FaCode />,
      label: "Skills",
      color: active === "Skills" ? "white" : "silver",
    },
    {
      icon: <FaEnvelope />,
      label: "Contact",
      color: active === "Contact" ? "white" : "silver",
    },
  ];

  return (
    <div
      className={`w-20 h-screen bg-gray-light flex flex-col justify-center items-center text-center transform transition-transform duration-500 ${
        show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
      style={{ transitionDelay: "0.5s" }}
    >
      {icons.map((item, index) => (
        <div
          key={index}
          className="p-4 rounded-full"
          style={{
            fontSize: "3rem",
            color: item.color,
          }}
          onClick={() => handleClick(index, item)}
        >
          {item.icon}
          <p className="text-sm">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
