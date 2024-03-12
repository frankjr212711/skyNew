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
        
        
        </>
    )
}