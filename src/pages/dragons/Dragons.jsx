import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./dragons.css";

export const Dragons = () => {
  const [dragons, setDragons] = useState(null);
  console.log("dragons", dragons);

  useEffect(() => {
    if (!dragons) {
      const getDragons = async () => {
        const res = await fetch("https://api.spacexdata.com/v4/dragons");
        const data = await res.json();
        console.log("data", data);
        setDragons(data);
      };

      getDragons();
    }
  }, [dragons]);

  return (
    <div className="dragons">
      <div className="titleDragons">Dragons</div>
      {dragons ? (
        <div className="allDragons">
          {dragons.map(({ name, description, id, flickr_images }) => (
              <div key={id} className="dragon">
                <img
                  className="dragonImage"
                  src={flickr_images[0]}
                  alt={name}
                />
                <div className="dragonName">{name}</div>
                <div className="description">{description}</div>
                <Link key={id} className="readMoreButton" to={`/dragon/${id}`}>
                  <div >Read More</div>
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