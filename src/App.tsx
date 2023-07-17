import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import stars from "./components/images/background-stars.svg";
import Header from "./components/header";
import Mercury from "./components/1mercury/mercury";
import Venus from "./components/2venus/Venus";
import Earth from "./components/3earth/Earh";
import Mars from "./components/4mars/Mars";
import Jupiter from "./components/5jupiter/Jupiter";
import Saturn from "./components/6saturn/Saturn";
import Uranus from "./components/7uranus/Uranus";
import Neptune from "./components/8neptune/Neptune";

function App() {
  return (
    <div
      className="App w-full  flex justify-center 
    items-center h-screen bg-stone-200"
    >
      <div
        className="mainParent max-w-[1440px] bg-primary"
        style={{ backgroundImage: `url(${stars})` }}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Mercury />} />
            <Route path="/Mercury" element={<Mercury />} />
            <Route path="/Venus" element={<Venus />} />
            <Route path="/Earth" element={<Earth />} />
            <Route path="/Mars" element={<Mars />} />
            <Route path="/Jupiter" element={<Jupiter />} />
            <Route path="/Saturn" element={<Saturn />} />
            <Route path="/Uranus" element={<Uranus />} />
            <Route path="/Neptune" element={<Neptune />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
