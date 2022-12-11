import "./navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="container">
      <div className="containerLogo">
        <ul>
          <li>
            <Link className="links" to="/">
              RealCars
            </Link>
          </li>
        </ul>
      </div>
      <div className="containerMenu">
        <ul>
          <li>
            <Link to="/category/New">New Cars</Link>
          </li>
          <li>
            <Link to="/category/Used">Used Cars</Link>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
