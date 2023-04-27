import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Pages/About/About";
import ProjectPage from "./Pages/Projects/Projects";
import Projects from "./Pages/Projects/Projects";
import Academics from "./Pages/Academics/Academics";
import Skills from "./Pages/Skills/Skills";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <BrowserRouter>
        <Sidebar />
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/About" element={<About />} />
              <Route path="/Academics" element={<Academics />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Contact" element={<Contact />} />






              
           </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
