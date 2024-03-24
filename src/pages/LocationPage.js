import Footer from "../components/Footer";
import Header from "../components/Header";
import Line3 from "../components/Line3";
import Line4 from "../components/Line4";
import TapeStrip from "../images/TapeStrip.png";
import mapImg from "../images/map-img.png";
import "../styles/LocationPage.css";
import LeftColumn from "../images/left-images.png";
import RightColumn from "../images/right-images.png";
import LeftColumnPh from "../images/left-ph-images.png";
import RightColumnPh from "../images/right-ph-images.png";
import Info from "../components/Info";
import House from "../components/House";
import House2 from "../components/House2";

import w1 from "../images/see-the-menu.png";
import w2 from "../images/reserve-a-table.png";
import w3 from "../images/join-the-team.png";

import LangContext from "../contexts/LangContext";
import languageMap from "../languageMap";
import { useState, useContext } from "react";
const LocationPage = () => {
  const { globalVariable, updateGlobalVariable } = useContext(LangContext);

  return (
    <div>
      <Header />
      <House2 />
      <Line3 />
      <div style={{ position: "relative" }}>
        <img className="side-left phh" src={LeftColumn} />
        <img className="side-right phh" src={RightColumn} />

        <img className="side-left ph" src={LeftColumnPh} />
        <img className="side-right ph" src={RightColumnPh} />

        <div className="coffee-story">
          <p className="positions-section-desc" style={{ maxWidth: "70%" }}>
            {languageMap[globalVariable]?.text39}
          </p>
        </div>
        <Info />
        <Line4 />
        <div className="location-house-section">
          <div className="location-house-links">
            <a href="/menu" className="location-house-link">
              <img src={w1} />
            </a>
            <a href="/reservation" className="location-house-link">
              <img src={w2} />
            </a>
            <a href="/careers" className="location-house-link">
              <img src={w3} />
            </a>
          </div>
          <div className="location-house-section-details">
            <a
              className="location-img-map"
              href="https://www.google.com/maps/place/NAKED+GROUND/@38.9826493,1.5330899,21z/data=!3m1!5s0x1299154dd4483e0f:0x85e890e689383ebc!4m6!3m5!1s0x12991540cddc4fe7:0xb87b34c54927ccf!8m2!3d38.9827039!4d1.533152!16s%2Fg%2F11s57f9zjl?authuser=0"
              target="_blank"
            >
              <img src={mapImg} />
            </a>
            <div className="location-info-map">
              <p className="location-house-section-details-name">
                NAKED GROUND
              </p>
              <p className="location-house-section-details-destination">
                SANTA EULARIA DES RIU, IBIZA
              </p>
              <p className="location-house-section-details-address">
                Edificio Koala, Carrer Ricardo Curtoys Gotarredona, Local 8,
                07840 Santa Eulària des Riu, Illes Balears, Spain
              </p>
              <p className="purpose-p">
                {languageMap[globalVariable]?.text44}{" "}
              </p>
              <p className="purpose-p">
                {languageMap[globalVariable]?.text44a} 9AM - 12AM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="amsterdam-section">
        <img className="tape-strip-ams phh" src={TapeStrip}></img>
        <h2 className="hh2 ams" style={{ color: "white" }}>
          LONDON HOUSE
        </h2>
        <p className="hh2-span">{languageMap[globalVariable]?.text23}</p>
      </div>
      <Footer />
    </div>
  );
};
export default LocationPage;
