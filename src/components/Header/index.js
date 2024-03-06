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
            <nav>
              <ul>
                <li>
                  <a href="/skywalker">Skywalker</a>
                </li>
                <li>
                  <a href="/gjr">GJR Works</a>
                </li>
                <li>
                  <a href="/librex">Librex Holdings</a>
                </li>
              </ul>
            </nav>
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
