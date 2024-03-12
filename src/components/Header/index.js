import { Link } from "react-router-dom";
import "./Styles.css";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
// import Logo  from "../../images/gjr-img-01.jpg";

export const Header = () => {
  const [click, setClick] = useState(false);

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
        <div className="mainBar">
          <div className="mainBarWrap">
            <div className="inner">
              <div className="inner-wrap">
                <a href="/" className="logo">
                  <span>{/* <img src={Logo} alt=""/> */}</span>
                  <span>LOGO</span>
                </a>

                <ul>
                  <li>
                    <a href="/skywalker">Skywalker</a>
                    <div className="mega-dropdown">
                      <div className="mega-dropdown-wrap">
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
                    <div className="mega-dropdown">
                      <div className="mega-dropdown-wrap">
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
                    <div className="mega-dropdown">
                      <div className="mega-dropdown-wrap">
                        <span>
                          <h2>
                            Learn how to apply and begin your studies at
                            Skywalker
                          </h2>
                          <button>
                            <a href="/librex">Visit Page</a>
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
              </div>
            </div>
          </div>
        </div>

        <div className="main-bar">
          <div className="main-bar-content">
            <a href="/" className="lo-go">
              <span>{/* <img src={Logo} alt=""/> */}</span>
              <span>LOGO</span>
            </a>

            <div className="menus" onClick={()=>setClick(!click)}>

              <div className={click ? "closeBtn" : "menuBtn"} onClick={()=>setClick(!click)} >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* <div className="closeBtn">
                <span></span>
                <span></span>
              </div> */}
            </div>

            {click && <div className="drop-menu">
              <ul>
                <li id="sky-btn">
                  <a href="#sky-btn">
                    <span>Skywalker</span>
                    <span>
                      <FaPlus />
                    </span>
                  </a>
                  <ul>
                    <li>
                      <p>Sachet Water</p>
                    </li>
                    <li>
                      <p>Dispenser Bottles</p>
                    </li>
                    <li>
                      <p>Dispenser Fridge</p>
                    </li>
                  </ul>
                </li>
                <li id="gjr-btn">
                  <a href="#gjr-btn">
                    <span>GJR Works</span>
                    <span>
                      <FaPlus />
                    </span>
                  </a>
                  <ul>
                    <li>
                      <p>Interior Designs</p>
                    </li>
                    <li>
                      <p>General Wood Works</p>
                    </li>
                    <li>
                      <p>Road Construction</p>
                    </li>
                    <li>
                      <p>Building Construction</p>
                    </li>
                    <li>
                      <p>Plumbing Works</p>
                    </li>
                    <li>
                      <p>General Merchant</p>
                    </li>
                    <li>
                      <p>Janitorial Services</p>
                    </li>
                  </ul>
                </li>
                <li id="lib-btn">
                  <a href="#lib-btn">
                    <span>Librex Holdings</span>
                    <span>
                      <FaPlus />
                    </span>
                  </a>
                  <ul>
                    <li>
                      <p>Crystello</p>
                    </li>
                    <li>
                      <p>Pamello</p>
                    </li>
                    <li>
                      <p>Waterello</p>
                    </li>
                    <li>
                      <p>Ritello</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>}
          </div>
        </div>
      </header>
    </>
  );
};
