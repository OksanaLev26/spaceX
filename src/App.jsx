import { Route, Routes } from "react-router-dom";

import { Homepage } from "./pages/homepage/Homepage";
import { Nav } from "./components/navigation/Nav";
import { Capsules } from "./pages/capsules/Capsules";
import "./app.css";

export const App = () => {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/capsules" element={<Capsules />} />
        {/* <Route path="/crew" element={<Crew />} />
        <Route path="/crew/:id" element={<CrewItem />} />
        <Route path="/dragons" element={<Dragons />}></Route>
        <Route path="/dragons/:id" element={<DragonItem />}></Route> */}
      </Routes>
    </div>
  );
};
