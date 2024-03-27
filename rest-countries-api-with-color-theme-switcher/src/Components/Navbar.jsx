import { Link } from "react-router-dom";

function Navbar({ toggleDarkMode }) {
  return (
    <div className="navbar">
      <p>
        <Link to="/">Where in the world</Link>
      </p>
      <button className="mode-btn" onClick={toggleDarkMode}>
        <i className="fa-solid fa-moon"></i>
        <p>Dark Mode</p>
      </button>
    </div>
  );
}

export default Navbar;
