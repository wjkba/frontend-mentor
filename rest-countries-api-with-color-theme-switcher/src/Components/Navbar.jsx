import { Link } from "react-router-dom";

function Navbar({ toggleDarkMode }) {
  return (
    <div className="navbar">
      <p>
        <Link to="/">Where in the world</Link>
      </p>
      <button className="mode-btn" onClick={toggleDarkMode}>
        <p>Dark Mode</p>
      </button>
    </div>
  );
}

export default Navbar;
