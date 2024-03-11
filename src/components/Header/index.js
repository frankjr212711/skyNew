import { Link } from "react-router-dom";
import Styles from "./Styles.css";
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

                    </div>
                  </div>
                </li>
                <li>
                  <a href="/gjr">GJR Works</a>
                  <div className="mega-dropdown">
                    <div className="mega-dropdown-wrap"></div>
                  </div>
                </li>
                <li>
                  <a href="/librex">Librex Holdings</a>
                  <div className="mega-dropdown">
                    <div className="mega-dropdown-wrap"></div>
                  </div>
                </li>
                {/* <li>
                  <a href="">About</a>
                  <div className="mega-dropdown">
                    <div className="mega-dropdown-wrap"></div>
                  </div>
                  
                  </li> */}
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
