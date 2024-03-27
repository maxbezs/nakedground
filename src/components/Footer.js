import "../styles/Footer.css";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import tiktok from "../images/tiktok.svg";
import youtube from "../images/youtube.svg";
import { useState, useContext } from "react";
import LangContext from "../contexts/LangContext";
import logos from "../images/logom.svg";
import logos1 from "../images/logom1.svg";

import axios from "axios";
import languageMap from "../languageMap";

const Footer = () => {
  const { globalVariable, updateGlobalVariable } = useContext(LangContext);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [exist, setExist] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      email,
    };
    console.log(data);
    try {
      const response = await axios.post(
        "https://nakedground.onrender.com/api/trip-list",
        data
      );
      console.log(response.data.message);
      if (response.data.message === "Email Sent") {
        setStatus(true);
        setExist(false);
      }
      if (response.data.message === "Email Exist") {
        setExist(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <footer className="ffooter">
        <div>
          <h3 className="hh3">
            <img alt="logo" style={{ width: "100px" }} src={logos1} />
          </h3>
          <p className="footer-p">{languageMap[globalVariable]?.text24}</p>
        </div>

        <div className="footer-colums">
          <div className="footer-colum phh">
            <h4 className="hh4">{languageMap[globalVariable]?.text25}</h4>
            <p className="purpose-p">{languageMap[globalVariable]?.text25a}</p>
          </div>
          <hr className="hhr phh" />
          <div className="footer-colum">
            <a href="/ibiza-house" className="nav-link">
              {languageMap[globalVariable]?.text1}
            </a>
            <a href="/coffee" className="nav-link">
              {languageMap[globalVariable]?.text2}
            </a>
            <a href="/menu" className="nav-link">
              {languageMap[globalVariable]?.text26}
            </a>
            <a href="/reservation" className="nav-link">
              {languageMap[globalVariable]?.text29}
            </a>
            <a href="/careers" className="nav-link">
              {languageMap[globalVariable]?.text30}
            </a>
          </div>
          <hr className="hhr phh" />
          <div className="footer-colum">
            <div className="social-icons">
              <a
                target="_blank"
                href="https://www.facebook.com/NakedGroundEspana"
              >
                <img className="social-icon" src={facebook} />
              </a>
              <a target="_blank" href="https://www.tiktok.com/@nakedground.es">
                <img className="social-icon" src={tiktok} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/nakedground.es/"
              >
                <img className="social-icon" src={instagram} />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@nakedgroundlive/"
              >
                <img className="social-icon" src={youtube} />
              </a>
            </div>
            {/*<a href='/subscribe' style={{width:'100%'}}><button className='subscribe-button'>{languageMap[globalVariable]?.text31}</button></a>*/}
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-row">
            <a href="mailto:ibizahouse@nakedground.coffee" className="nav-link">
              ibizahouse@nakedground.coffee
            </a>
            <a href="/privacy-policy" target="_blank" className="nav-link">
              {" "}
              {languageMap[globalVariable]?.text35}
            </a>
          </div>
          <div className="footer-bottom-row">
            <p className="purpose-p">Copyright © 2023</p>
            <p className="purpose-p">NAKED GROUND COFFEE</p>
            <p className="purpose-p">{languageMap[globalVariable]?.text34}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
