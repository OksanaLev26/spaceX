import { Route, Routes } from "react-router-dom";

import { Homepage } from "./pages/homepage/Homepage";
import { Header } from "./components/navigation/Header";
import { Capsules } from "./pages/capsules/Capsules";
import { Crew } from "./pages/crew/crew";
import { CrewItem } from "./pages/crewItem/CrewItem";
import { Dragons } from "./pages/dragons/Dragons";
import { DragonItem } from "./pages/dragonItem/DragonItem";
import { useEffect, useState } from "react";
import { BurgerMenu } from "./components/burgerMenu/BurgerMenu";
import "./app.css";

const DOMEN = 'spaceX';
const API = 'https://api.spacexdata.com/v4';

export const App = () => {
  const [crew, setCrew] = useState(null);
  const [company, setCompany] = useState(null);
  const [dragons, setDragons] = useState(null);
  const [capsules, setCapsules] = useState(null);
  const [hamburgerIsOpen, setHamburgerOpen] = useState(false);

  const handleSetHamburgerOpen = (isOpen) => {
    setHamburgerOpen(isOpen);
  }

  useEffect(() => {
    const getCapsules = async () => {
      const res = await fetch(`${API}/capsules`);
      const data = await res.json();
      const newCapsules = data.map((item) => [
        {
          key: "Capsule type:",
          value: item.type,
        },
        {
          key: "Serial number:",
          value: item.serial,
        },
        {
          key: "Status:",
          value: item.status,
        },
        {
          key: "Water landings:",
          value: item.water_landings,
        },
        {
          key: "Land landings:",
          value: item.land_landings,
        },
        {
          key: "Land landings:",
          value: item.land_landings,
        },
        {
          key: "Reuse count:",
          value: item.reuse_count,
        },
      ]);
      setCapsules(newCapsules);
    };

    getCapsules();
  }, []);

  useEffect(() => {
    const getDragons = async () => {
      const res = await fetch(`${API}/dragons`);
      const data = await res.json();
      setDragons(data);
    };

    getDragons();
  }, []);

  useEffect(() => {
    const getCompany = async () => {
      const res = await fetch(`${API}/company`);
      const data = await res.json();
      setCompany(data);
    };

    getCompany();
  }, []);

  useEffect(() => {
    const getCrew = async () => {
      const res = await fetch(`${API}/crew`);
      const data = await res.json();
      setCrew(data);
    };

    getCrew();
  }, []);

  return (
    <div className="app">
      <Header hamburgerIsOpen={hamburgerIsOpen} setHamburgerOpen={handleSetHamburgerOpen}/>
      <Routes basename='/spaceX/'>
        <Route path='/' element={<Homepage company={company} />} />
        <Route path='/crew' element={<Crew propCrew={crew} />} />
        <Route path='/crew/:id' element={<CrewItem />} />
        <Route
          path='/capsules'
          element={<Capsules propCapsules={capsules} />}
        />
        <Route path='/dragons' element={<Dragons propDragons={dragons} />} />
        <Route path='/dragons/:id' element={<DragonItem />}></Route>
      </Routes>
      {hamburgerIsOpen && (
        <BurgerMenu hamburgerIsOpen={hamburgerIsOpen} setHamburgerOpen={handleSetHamburgerOpen}/>
      )}
    </div>
  );
};
