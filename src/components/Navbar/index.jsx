import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import logo from "../../images/logo.png";
import { HiMenuAlt1 } from "react-icons/hi";

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);
  };

  let menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsToggled(false);
      }
    });
  }, [isToggled]);

  return (
    <>
      <div className="container" ref={menuRef}>
        <img src={logo} alt="MANUSERVE" className="logo" />

        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#sobre">Sobre Nós</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>

        <nav className="nav-mobile">
          <div className="btn-mobile" onClick={toggleHandler}>
            <HiMenuAlt1 />
          </div>
          <ul style={{ display: isToggled ? "block" : "none" }}>
            <img src={logo} alt="MANUSERVE" className="logo-navbar" />
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#sobre">Sobre Nós</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
