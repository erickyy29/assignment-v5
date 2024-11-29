import "./Header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <h1 className="logo" onClick={() => navigate("/")}>Flixit</h1>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <li className="menu-list-item active" onClick={() => navigate("/")}>Home</li>
            <li className="menu-list-item" onClick={() => navigate("/")}>Movies</li>
            <li className="menu-list-item" onClick={() => navigate("/")}>Shows</li>
            <li className="menu-list-item" onClick={() => navigate("/")}>Popular</li>
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

        <div className="sign-in-container">
          <div className="sign-in-button-container">
            <a href="/signIn" className="signin-btn" onClick={() => navigate("/signIn")}>Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
