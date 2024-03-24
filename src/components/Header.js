import React, { useState, useEffect, useContext } from "react";
import "../styles/Header.css";
import account from "../images/account.svg";
import accountB from "../images/accountB.svg";
import arrow from "../images/arrow.svg";
import ukIcon from "../images/country-GB.svg";
import spainIcon from "../images/country-ES.svg";
import logos from "../images/logom.svg";
import logos1 from "../images/logom1.svg";
import MenuLogo from "../images/menu-humb.png";
import { useLocation } from "react-router-dom";
import LangContext from "../contexts/LangContext";
import languageMap from "../languageMap";
const Header = () => {
  const { globalVariable, updateGlobalVariable } = useContext(LangContext);
  const location = useLocation();
  const [activePath, setActivePath] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [lang, setLang] = useState(globalVariable);
  const getFlagIcon = () => {
    switch (globalVariable) {
      case "es":
        return (
          <img
            src={spainIcon}
            alt="Spain"
            style={{ width: "auto", height: "20px" }}
          />
        );
      case "uk":
        return (
          <img
            src={ukIcon}
            alt="UK"
            style={{ width: "auto", height: "20px" }}
          />
        );
      default:
        return null;
    }
  };

  const toggleDropdown = () => {
    setIsOpen2(!isOpen2);
  };

  const handleClick = () => {
    localStorage.setItem("lang", "uk");
    updateGlobalVariable("uk");
    setLang("uk");
    setIsOpen2(!isOpen2);
  };

  const handleClick2 = () => {
    localStorage.setItem("lang", "es");
    updateGlobalVariable("es");
    setLang("es");
    setIsOpen2(!isOpen2);
  };

  const openNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleUrlChange = () => {
      console.log(location.pathname);
      setActivePath(location.pathname);
    };

    handleUrlChange();
  }, [activePath]);

  useEffect(() => {
    if (localStorage.getItem("lang")) {
      localStorage.setItem("lang", "uk");
    }
    localStorage.setItem("lang", lang);
    console.log("Local Lang: " + localStorage.getItem("lang"));
  }, [lang]);
  return (
    <div>
      <div
        id="mySidenav"
        className="sidenav"
        style={isOpen ? { width: "100vw" } : {}}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <a className="closebtn" onClick={openNav}>
            &times;
          </a>
          <a href="/" className="nav-link">
            <p className="nav-logo">
              <img alt="logo" style={{ width: "60px" }} src={logos} />
            </p>
          </a>
          <a href="/subscribe">
            {/*
            <img
              style={{ maxWidth: "20px", objectFit: "none", height: "100%" }}
              src={account}
            ></img>*/}
          </a>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginInline: "10%",
          }}
        >
          {/*<a
            className={
              activePath === "/ibiza-house" ? "nav-link active" : "nav-link "
            }
            href="/ibiza-house"
          >
            {languageMap[globalVariable]?.text1}
          </a>*/}
          <a
            className={
              activePath === "/coffee" ? "nav-link active" : "nav-link"
            }
            href="/coffee"
          >
            {languageMap[globalVariable]?.text2}
          </a>
          {/*<a className={activePath === '/menu' ? 'nav-link active' : 'nav-link'} href="/menu">{languageMap[globalVariable]?.text26}</a>
            <a className={activePath === '/reservation' ? 'nav-link active' : 'nav-link'} href="/reservation">{languageMap[globalVariable]?.text29}</a>
    <a className={activePath === '/careers' ? 'nav-link active' : 'nav-link'} href="/careers">{languageMap[globalVariable]?.text30}</a>*/}
        </div>
      </div>
      <header className="hh">
        <nav className="nnav">
          <div className="phh">
            {/*<a
              className={
                activePath === "/ibiza-house"
                  ? " nav-link active phh"
                  : "nav-link phh"
              }
              href="/ibiza-house"
            >
              {languageMap[globalVariable]?.text1}
            </a>*/}
            <a
              href="/coffee"
              className={
                activePath === "/coffee"
                  ? "nav-link active phh"
                  : "nav-link phh"
              }
              style={{ marginInlineStart: "42px" }}
            >
              {languageMap[globalVariable]?.text2}
            </a>
          </div>

          <div
            onClick={openNav}
            className="nav-section-2 hide-menu"
            style={{ width: "57px" }}
          >
            <img className="" src={MenuLogo} />
          </div>

          <a href="/" className="nav-link">
            <p className="nav-logo">
              <img alt="logo" style={{ width: "50px" }} src={logos} />
            </p>
          </a>
          <div className="nav-section-2">
            {/*<a
              href="/reservation"
              className={
                activePath === "/reservation"
                  ? "nav-link active phh"
                  : "nav-link phh"
              }
            >
              {languageMap[globalVariable]?.text3}
            </a>*/}
            <div className="select-language">
              <div
                className="dropdown"
                style={{ position: "relative", display: "inline-block" }}
              >
                <button
                  type="button"
                  onClick={toggleDropdown}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    outline: "none",
                  }}
                >
                  {getFlagIcon()}
                  <img src={arrow} className="phh arrowlang"></img>
                </button>

                {isOpen2 && (
                  <div className="select-div">
                    <a
                      onClick={handleClick2}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "8px 8px",
                        textDecoration: "none",
                        color: "#333",
                      }}
                    >
                      <img
                        src={spainIcon}
                        alt="Spain"
                        style={{ width: "auto", height: "20px" }}
                      />
                    </a>
                    <a
                      onClick={handleClick}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "8px 8px",
                        textDecoration: "none",
                        color: "#333",
                      }}
                    >
                      <img
                        src={ukIcon}
                        alt="UK"
                        style={{ width: "auto", height: "20px" }}
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
            {/*<a href="/subscribe">
              {activePath === "/subscribe" ? (
                <img className="user-icon" src={accountB}></img>
              ) : (
                <img className="user-icon" src={account}></img>
              )}
            </a>*/}
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Header;
