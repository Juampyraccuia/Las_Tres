import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <h1>Las Tres</h1>
          </div>
          <ul className="navbar-links">
            <li className="navbar-link">
              <a href="#">Inicio</a>
            </li>
            <li className="navbar-link">
              <a href="#">Vestidos</a>
            </li>
            <li className="navbar-link">
              <a href="#">Ropa Interior</a>
            </li>
            <li className="navbar-link">
              <a href="#">Accesorios</a>
            </li>
          </ul>
          <div className="flex items-center">
            <CartWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
