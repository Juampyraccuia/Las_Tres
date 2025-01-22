import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="categories">
        <Link to="/category/carteras" className="category">
          Carteras
        </Link>
        <Link to="/category/ropa-interior" className="category">
          Ropa Interior
        </Link>
        <Link to="/category/vestidos" className="category">
          Vestidos
        </Link>
      </ul>

      <Link to="/" className="brand primary-font-color">
        <img src="/img/logo.png" alt="logo" />
      </Link>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
