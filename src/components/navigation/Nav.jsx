import { Link } from "react-router-dom";
import "./nav.css";

export const Nav = () => {
  return (
    <div className="nav">
      <img className="spasexImg" src="https://logodix.com/logo/358.jpg" />
      <Link to="/">
        <div className="navItem">Homepage</div>
      </Link>
      <Link to="/capsules">
        <div className="navItem">Capsules</div>
      </Link>
      <Link to="/crew">
        <div className="navItem">Crew</div>
      </Link>
      <Link to="/dragons">
      <div className="navItem">Dragons</div>
      </Link>
    </div>
  );
};
