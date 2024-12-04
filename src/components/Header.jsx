import "./Header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "../imgs/logo.png"; // Adjust the path if necessary

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container" onClick={() => navigate("/")}>
          <img src={logo} alt="Aginflix Logo" className="logo-image" />
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <li
              className={`menu-list-item ${isActive("/") ? "active" : ""}`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`menu-list-item ${isActive("/movies") ? "active" : ""}`}
              onClick={() => navigate("/movies")}
            >
              Movies
            </li>
          </ul>
        </div>

        <div className="search-bar">
          <form aria-label="Search the site">
            <input className="search-input" type="search" placeholder="Search..." />
            <button type="submit" aria-label="Search">
              <i className="search-icon fa fa-search"></i>
            </button>
          </form>
        </div>

        <div className="auth-buttons">
          <a
            href="/signin"
            className="signin-btn"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="signup-btn"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
