import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Footer } from "./pages/Footer";
import hangit from "../images/hangit.png";
import "../styles/main.scss";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { FaBars } from "@react-icons/all-files/fa/FaBars";

export const Layouts = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  function OpenCart() {
    setIsOpened((wasOpened) => !wasOpened);
  }

  return (
    <>
      <div className="layoutsWrapper">
        <header>
          <Link to="/">
            <img className="logo" src={hangit} alt="logo" />
          </Link>
          <div className="nav-div">
            <nav>
              <ul
                className={isMobile ? "nav-links-mobile" : "nav-links"}
                onClick={() => setIsMobile(false)}
              >
                <li>
                  <Link to="/artwork">
                    <h3 className="nav-link">Art</h3>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <h3 className="nav-link">About us</h3>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <h3 className="nav-link">Log in</h3>
                  </Link>
                </li>
                <div className="cart-button-div">
                  <button className="cart-button" onClick={OpenCart}>
                    <Link to="/checkout">
                      <FiShoppingCart
                        className="fi-Shopping-Cart"
                        color="#6b6a68"
                      ></FiShoppingCart>
                    </Link>

                    <div
                      className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                      style={{
                        color: "white",
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                        bottom: 0,
                        right: 45,
                        transform: "translate(25%,25%)",
                      }}
                    >
                      3
                    </div>
                  </button>
                </div>
              </ul>

              <div className="nav-links-section">
                <div className="cart-button-div">
                  <button
                    className="cart-button"
                    id="open-panel"
                    onClick={OpenCart}
                  >
                    <FiShoppingCart className="fi-Shopping-Cart"></FiShoppingCart>
                  </button>
                </div>
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
    </>
  );
};
