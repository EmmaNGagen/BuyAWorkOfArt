import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Footer } from "./pages/Footer";
import shoppingBag from "../images/shoppingBag.png";
import bawoaLogo from "../images/bawoaLogo.png";
import "../styles/main.scss";
import { AiOutlineShopping } from "@react-icons/all-files/ai/AiOutlineShopping";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { FaBars } from "@react-icons/all-files/fa/FaBars";

export const Layouts = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="layoutsWrapper">
      <header>
        <Link to="/" className="home">
          <img className="logo" src={bawoaLogo} alt="logo" />
        </Link>
        <div className="nav-div">
          <nav>
            <ul
              className={isMobile ? "nav-links-mobile" : "nav-links"}
              onClick={() => setIsMobile(false)}
            >
              <li>
                <Link to="/artwork" className="meny">
                  <h3 className="nav-link">Art</h3>
                </Link>
              </li>
              <li>
                <Link to="/about" className="booking">
                  <h3 className="nav-link">About us</h3>
                </Link>
              </li>
              <li>
                <Link to="/login" className="login">
                  <h3 className="nav-link">Log in</h3>
                </Link>
              </li>
              <Link to="/shoppingCart" className="">
                <AiOutlineShopping className="shopping-bag" />
              </Link>
            </ul>
            <div className="nav-links-section">
            <Link to={"/shoppingCart"} className="">
                <AiOutlineShopping className="shopping-bag" />
              </Link>
              <button
                className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}
              >
                {isMobile ? <FiMenu /> : <FaBars />}
              </button>
            </div>
              
            
          </nav>
        </div>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};
