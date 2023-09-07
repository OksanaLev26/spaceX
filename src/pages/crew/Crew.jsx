import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./crew.css";

export const Crew = () => {
  const [crew, setCrew] = useState(null);

  useEffect(() => {
    if (!crew) {
      const getCrew = async () => {
        const res = await fetch("https://api.spacexdata.com/v4/crew");
        const data = await res.json();
        console.log("data", data);
        setCrew(data);
      };

      getCrew();
    }
  }, [crew]);

  return (
    <div className="crew">
      <div className="titleCrew">Crew</div>
      {crew ? (
        <div className="allCrew">
          {crew.map(({ id, name, image }) => (
            <div key={id}>
              <Link to={`/crew/${id}`}>
                <div className="imageWrapper">
                  <img className="image" src={image} alt={name} />
                </div>
                <div className="imageName">{name}</div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
