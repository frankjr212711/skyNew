import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import './styles.css';

export const MainBar = () => {
    const [click, setClick] = useState(false);
    return (
        <>
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
            </div>

            {click && <div className="drop-menu">
              <ul>
                <li id="sky-btn">
                  <a href="#sky-btn">
                    <span>Waters</span>
                    <span>
                      <FaPlus />
                    </span>
                  </a>
                  <ul>
                    <li>
                      <a href="/skywalker">Sachet Water</a>
                    </li>
                    <li>
                      <a href="/skywalker">Dispenser Bottles</a>
                    </li>
                    <li>
                      <a href="/skywalker">Dispenser Fridge</a>
                    </li>
                  </ul>
                </li>
                <li id="gjr-btn">
                  <a href="#gjr-btn">
                    <span>GJR</span>
                    <span>
                      <FaPlus />
                    </span>
                  </a>
                  <ul>
                    <li>
                      <a href="/gjr">Interior Designs</a>
                    </li>
                    <li>
                      <a href="/gjr">General Wood Works</a>
                    </li>
                    <li>
                      <a href="/gjr">Road Construction</a>
                    </li>
                    <li>
                      <a href="/gjr">Building Construction</a>
                    </li>
                    <li>
                      <a href="/gjr">Plumbing Works</a>
                    </li>
                    <li>
                      <a href="/gjr">General Merchant</a>
                    </li>
                    <li>
                      <a href="/gjr">Janitorial Services</a>
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
                      <a href="/librex">Crystello</a>
                    </li>
                    <li>
                      <a href="/librex">Pamello</a>
                    </li>
                    <li>
                      <a href="/librex">Waterello</a>
                    </li>
                    <li>
                      <a href="/librex">Ritello</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>}
          </div>
        </div>
        
        
        </>
    )
}