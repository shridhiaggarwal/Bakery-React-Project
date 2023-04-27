import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import Images from "../../components/Images";

function Navbar() {
  return (
    <>
      <nav id="home" className="navbar navbar-expand-lg fixed-top">
        <Link className="navbar-brand" to="/">
          <img src={Images.WHITE_LOGO} alt="bakery logo - white color"/>
          <h3 className="navbar-text">Bakery!</h3>
        </Link>
        <button
          className="navbar-toggler ml-auto navToggleIcon"
          type="button"
          data-toggle="collapse"
          data-target="#menu"
          aria-controls="navbarToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="menu">
          <ul className="navbar-nav">
            <li className="navbar-item active">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Menu
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Gallery
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="dummyNavbar"></div>
    </>
  );
}

export default Navbar;
