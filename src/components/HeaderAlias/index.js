import { Link } from "react-router-dom";
import Styles from "./Styles.css";
// import Logo  from "../../images/gjr-img-01.jpg";

export const HeaderAlias = () => {
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
        </div>
        <div className="mainBarAnnex">
          <div className="mainBarWrapAnnex">
            <div className="innerAnnex">
              <div className="inner-wrap-annex">
                <a href="/" className="logoAnnex">
                  <span>{/* <img src={Logo} alt=""/> */}</span>
                  <span>LOGO</span>
                </a>

                <ul>
                  <li>
                    <a href="/skywalker">Skywalker</a>

                    <div className="mega-dropdown-annex">
                      <div className="mega-dropdown-wrap-annex">
                        <span>
                          <h2>
                            Learn how to apply and begin your studies at
                            Skywalker
                          </h2>
                          <button>
                            <a href="/skywalker">Visit Page</a>
                          </button>
                        </span>
                        <span>
                          <ul>
                            <li>
                              <a href="">Natural Mineral Water</a>
                            </li>
                            <li>
                              <a href="">Sachet Water</a>
                            </li>
                            <li>
                              <a href="">Dispenser Bottles</a>
                            </li>
                          </ul>
                        </span>
                        <span>
                          <ul>
                            {/* <li><a href="">Natural Mineral Water</a></li> */}
                            {/* <li><a href="">Sachet Water</a></li> */}
                            <li>
                              <a href="">Dispenser Bottles</a>
                            </li>
                          </ul>
                        </span>
                        <span>
                          <h3>Contact Details</h3>
                          <ul>
                            <li>
                              <a href="">Natural Mineral Water</a>
                            </li>
                            <li>
                              <a href="">Sachet Water</a>
                            </li>
                            <li>
                              <a href="">Dispenser Bottles</a>
                            </li>
                          </ul>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="/gjr">GJR Works</a>
                    <div className="mega-dropdown-annex">
                      <div className="mega-dropdown-wrap-annex">
                        <span>
                          <h2>
                            Learn how to apply and begin your studies at
                            Skywalker
                          </h2>
                          <button>
                            <a href="/gjr">Visit Page</a>
                          </button>
                        </span>
                        <span>
                          <ul>
                            <li>
                              <a href="">Interior Designs</a>
                            </li>
                            <li>
                              <a href="">General Wood Works</a>
                            </li>
                            <li>
                              <a href="">Road Construction</a>
                            </li>
                            <li>
                              <a href="">Building Construction</a>
                            </li>
                          </ul>
                        </span>
                        <span>
                          <ul>
                            <li>
                              <a href="">Plumbing Works</a>
                            </li>
                            <li>
                              <a href="">General Merchant</a>
                            </li>
                            <li>
                              <a href="">Janitorial Services</a>
                            </li>
                            {/* <li>
                              <a href="">Civil Works</a>
                            </li> */}
                          </ul>
                        </span>
                        <span>
                          <h3>Contact Details</h3>
                          <ul>
                            <li>
                              <a href="">Natural Mineral Water</a>
                            </li>
                            <li>
                              <a href="">Sachet Water</a>
                            </li>
                            <li>
                              <a href="">Dispenser Bottles</a>
                            </li>
                          </ul>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="/librex">Librex Holdings</a>
                    <div className="mega-dropdown-annex">
                      <div className="mega-dropdown-wrap-annex">
                        <span>
                          <h2>
                            Learn how to apply and begin your studies at
                            Skywalker
                          </h2>
                          <button>
                            <a href="/librex" className="link">Visit Page</a>
                          </button>
                        </span>
                        <span>
                          <ul>
                            <li>
                              <a href="">Crytello</a>
                            </li>
                            <li>
                              <a href="">Pamello</a>
                            </li>
                          </ul>
                        </span>
                        <span>
                          <ul>
                            <li>
                              <a href="">Waterello</a>
                            </li>
                            <li>
                              <a href="">Ritello</a>
                            </li>
                          </ul>
                        </span>
                        <span>
                          <h3>Contact Details</h3>
                          <ul>
                            <li>
                              <a href="">Natural Mineral Water</a>
                            </li>
                            <li>
                              <a href="">Sachet Water</a>
                            </li>
                            <li>
                              <a href="">Dispenser Bottles</a>
                            </li>
                          </ul>
                        </span>
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
          </div>
        </div>
      </header>
    </>
  );
};
