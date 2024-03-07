import { Link } from "react-router-dom";
import styles from "./styles.css";
// import Logo  from "../../images/gjr-img-01.jpg";

export const Header = () => {
  return (
    <>
      <header className="website-header">
        <div className="top-bar">
          <nav>
            <ul>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Visit</Link>
              </li>
              <li>
                <Link>Mission</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link>Book A Design Visit</Link>
              </li>
              <li>
                <Link>Request A Brochure</Link>
              </li>
            </ul>
          </nav>
          {/* <a href="#" id="show-search-btn" title="toggle">
            <span>Search</span>
          </a> */}
        </div>
        <div className="mainBar">
          <div className="mainBarWrap">
            <a href="/" className="logoWrap">
              <span>{/* <img src={Logo} alt=""/> */}</span>
              <span>LOGO</span>
            </a>
          
              <ul>
                <li className="link">
                  <a href="/skywalker">Skywalker</a>

                  <div className="mega-dropdown">
                    <div className="mega-dropdown-wrap mw1024">
                      <div className="visit">
                        <h2>
                          Learn how to apply and begin your studies at
                          Uwinnipeg.
                        </h2>
                        <button>
                          <a href="/skywalker">LEARN MORE</a>
                        </button>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <a href="#">Sachet Water</a>
                          </li>
                          <li>
                            <a href="#">Bottle Water</a>
                          </li>
                          <li>
                            <a href="#">Dispenser Bottles</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <a href="#">Related Links</a>
                        <a href="#">Related Links</a>
                        <a href="#">Related Links</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="link">
                  <a href="/gjr">GJR Works</a>
                  <div className="mega-dropdown">
                    <div className="mega-dropdown-wrap mw1024">
                      <div>
                        <h2>
                          Learn how to apply and begin your studies at
                          Uwinnipeg.
                        </h2>
                        <button>
                          <a href="/gjr">LEARN MORE</a>
                        </button>
                      </div>
                      <div>
                        <ul>
                          <li>
                            <a href="#">Sachet Water</a>
                          </li>
                          <li>
                            <a href="#">Bottle Water</a>
                          </li>
                          <li>
                            <a href="#">Dispenser Bottles</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <a href="#">Related Links</a>
                        <a href="#">Related Links</a>
                        <a href="#">Related Links</a>
                      </div>

                    </div>
                  </div>
                </li>
                <li className="link">
                  <a href="/librex">Librex Holdings</a>

                  <div className="mega-dropdown">
                    <div className="mega-dropdown-wrap mw1024">
                      <div className="mega-text-box">
                        <h2>
                          Learn how to apply and begin your studies at
                          Uwinnipeg.
                        </h2>
                        <button>
                          <a href="/skywalker">LEARN MORE</a>
                        </button>
                      </div>
                      <div className="mega-items">
                        <ul>
                          <li>
                            <a href="#">Crytello</a>
                          </li>
                          <li>
                            <a href="#">Pamello</a>
                          </li>
                          <li>
                            <a href="#">Waterello</a>
                          </li>
                          <li>
                            <a href="#">Rite</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <a href="#">Related Links</a>
                        <a href="#">Related Links</a>
                        <a href="#">Related Links</a>
                      </div>

                    </div>
                  </div>

                </li>
              </ul>
           
            <div className="menuBtn">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
