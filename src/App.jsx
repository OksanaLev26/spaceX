import { Route, Routes } from "react-router-dom";

import { Homepage } from "./pages/homepage/Homepage";
import { Nav } from "./components/navigation/Nav";
import { Capsules } from "./pages/capsules/Capsules";
import { Crew } from "./pages/crew/crew";
import { CrewItem } from "./pages/crewItem/CrewItem";
import { Dragons } from "./pages/dragons/Dragons";
import "./app.css";

export const App = () => {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/crew/:id" element={<CrewItem />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="/dragons" element={<Dragons />} />
        {/* <Route path="/dragons/:id" element={<DragonItem />}></Route> */}
      </Routes>
    </div>
  );
};
