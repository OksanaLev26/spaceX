import { useEffect, useState } from "react";
import { Capsule } from "../../components/capsule/Capsule";
import "./capsules.css";

export const Capsules = () => {
  const [capsules, setCapsules] = useState(null);

  useEffect(() => {
    const getCapsules = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/capsules");
      const data = await res.json();
      console.log("data", data);
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
      console.log('newCapsules', newCapsules)
    };

    getCapsules();
  }, []);

  return (
    <>
      {capsules ? (
        <div className="capsules">
          <div className="capsulesContent">
            {capsules.map((capsule) => (
              <Capsule capsule={capsule} />
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
