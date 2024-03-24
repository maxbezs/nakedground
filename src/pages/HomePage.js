import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Line from "../components/Line";
import Line2 from "../components/Line2";
import beans from "../images/coffee-background.png";
import TapeStrip from "../images/TapeStrip.png";
import lemon from "../images/Lemon.png";
import mapImg from "../images/map-img.png";
import mapImg1 from "../images/map-img1.png";

import tripadv from "../images/trip-small.png";
import review1 from "../images/review1.png";
import review2 from "../images/review2.png";
import review3 from "../images/review3.png";
import headingLemon from "../images/MoreThanCoffeeLemon.png";
import LangContext from "../contexts/LangContext";
import languageMap from "../languageMap";
import { useState, useContext } from "react";
import "../styles/HomePage.css";
import Info from "../components/Info";
import House from "../components/House";

const HomePage = () => {
  const { globalVariable, updateGlobalVariable } = useContext(LangContext);

  return (
    <div>
      <Header />
      {/*<div className="lemon-section">
        <div
          style={{
            justifyContent: "start",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={headingLemon} />
        </div>
      </div>
      <Line />
      <Info />*/}
      <House />
      <div className="coffee-section">
        <h2 className="hh2" style={{ textAlign: "end" }}>
          {languageMap[globalVariable]?.text19}
        </h2>
        <a className="big-links" href="/coffee">
          <p className="hh2-span big-links">
            {languageMap[globalVariable]?.text20}
          </p>
        </a>
      </div>
      {/*<Line2 />*/}
      {/*<div className="review-section">
        <h2
          className="hh2"
          style={{ fontFamily: "Artifact", letterSpacing: "0" }}
        >
          {languageMap[globalVariable]?.text21}
        </h2>
        <p
          className="hh2-span"
          style={{ fontFamily: "Archivo Black", color: "black" }}
        >
          {languageMap[globalVariable]?.text22}
        </p>
        <p className="purpose-p" style={{ display: "flex" }}>
          As seen on{" "}
          <a
            href="https://www.tripadvisor.com/Restaurant_Review-g642208-d24851249-Reviews-NAKED_GROUND-Santa_Eulalia_del_Rio_Ibiza_Balearic_Islands.html"
            target="_blank"
          >
            <img
              style={{ width: "180px", height: "28px", objectFit: "contain" }}
              src={tripadv}
            />
          </a>
        </p>
        <a
          href="https://www.tripadvisor.com/Restaurant_Review-g642208-d24851249-Reviews-NAKED_GROUND-Santa_Eulalia_del_Rio_Ibiza_Balearic_Islands.html"
          target="_blank"
          className="reviews phh"
        >
          <div className="review">
            <img
              style={{
                width: "70px",
                position: "absolute",
                marginTop: "-60px",
              }}
              src={review1}
            />
            <div>
              <p className="review-header">Amazing brunch</p>
              <p className="purpose-p" style={{ textAlign: "start" }}>
                Amazing brunch, I love the people and atmosphere here the
                managers and staff are so welcoming really feels like a second
                home! Great to come with friends for brunch
              </p>
            </div>

            <p
              className="purpose-p"
              style={{
                fontSize: "14px",
                lineHeight: "16px",
                marginTop: "24px",
              }}
            >
              <b>Millies W</b>, TripAdvisor
            </p>
          </div>
          <div className="review">
            <img
              style={{
                width: "70px",
                position: "absolute",
                marginTop: "-60px",
              }}
              src={review2}
            />
            <div>
              <p className="review-header">Sensational!</p>
              <p className="purpose-p" style={{ textAlign: "start" }}>
                Sensational service from Troy and Fabrizio! Top food served
                before the Ibiza Marathon. Loved it and would recommend to all.
                So good we even came back for breakfast the next day.
              </p>
            </div>

            <p
              className="purpose-p"
              style={{
                fontSize: "14px",
                lineHeight: "16px",
                marginTop: "24px",
              }}
            >
              <b>Rollo S</b>, TripAdvisor
            </p>
          </div>
          <div className="review">
            <img
              style={{
                width: "70px",
                position: "absolute",
                marginTop: "-60px",
              }}
              src={review3}
            />
            <div>
              <p className="review-header">
                The best place in Santa eu for sure !
              </p>
              <p className="purpose-p" style={{ textAlign: "start" }}>
                Naked ground has it all … perfect for families , friends ,
                working … all whilst staring at the sea!
              </p>
            </div>

            <p
              className="purpose-p"
              style={{
                fontSize: "14px",
                lineHeight: "16px",
                marginTop: "24px",
              }}
            >
              <b>Amy W</b>, TripAdvisor
            </p>
          </div>
        </a>
      </div>*/}
      <div className="location-house-section pc">
        <div className="location-house-section-details">
          <div
            className="location-info-map"
            style={{
              paddingInline: "0%",
              width: "100%",
              alignItems: "center",
              marginTop: "36px",
            }}
          >
            <p className="location-house-section-details-name">NAKED GROUND</p>
            <p
              className="location-house-section-details-destination"
              style={{ textAlign: "center" }}
            >
              SANTA EULARIA DES<br></br> RIU, IBIZA
            </p>
            <a
              href="https://www.google.com/maps/place/NAKED+GROUND/@38.9826493,1.5330899,21z/data=!3m1!5s0x1299154dd4483e0f:0x85e890e689383ebc!4m6!3m5!1s0x12991540cddc4fe7:0xb87b34c54927ccf!8m2!3d38.9827039!4d1.533152!16s%2Fg%2F11s57f9zjl?authuser=0"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <p
                className="location-house-section-details-address"
                style={{ textAlign: "center" }}
              >
                Edificio Koala, Carrer Ricardo <br /> Curtoys Gotarredona, Local
                8, 07840 Santa Eulària des Riu, <br /> Illes Balears, Spain
              </p>
            </a>
            <a
              className="location-img-map"
              href="https://www.google.com/maps/place/NAKED+GROUND/@38.9826493,1.5330899,21z/data=!3m1!5s0x1299154dd4483e0f:0x85e890e689383ebc!4m6!3m5!1s0x12991540cddc4fe7:0xb87b34c54927ccf!8m2!3d38.9827039!4d1.533152!16s%2Fg%2F11s57f9zjl?authuser=0"
              target="_blank"
            >
              <img src={mapImg1} style={{ width: "100%" }} />
            </a>
            <p className="purpose-p">{languageMap[globalVariable]?.text44} </p>
            <p className="purpose-p">
              {languageMap[globalVariable]?.text44a} 9AM - 12AM
            </p>
          </div>
        </div>
      </div>
      <div className="location-house-section phh">
        <div className="location-house-section-details">
          <a
            className="location-img-map"
            href="https://www.google.com/maps/place/NAKED+GROUND/@38.9826493,1.5330899,21z/data=!3m1!5s0x1299154dd4483e0f:0x85e890e689383ebc!4m6!3m5!1s0x12991540cddc4fe7:0xb87b34c54927ccf!8m2!3d38.9827039!4d1.533152!16s%2Fg%2F11s57f9zjl?authuser=0"
            target="_blank"
          >
            <img src={mapImg} />
          </a>
          <div className="location-info-map">
            <p className="location-house-section-details-name">NAKED GROUND</p>
            <p className="location-house-section-details-destination">
              SANTA EULARIA DES RIU, IBIZA
            </p>
            <a
              href="https://www.google.com/maps/place/NAKED+GROUND/@38.9826493,1.5330899,21z/data=!3m1!5s0x1299154dd4483e0f:0x85e890e689383ebc!4m6!3m5!1s0x12991540cddc4fe7:0xb87b34c54927ccf!8m2!3d38.9827039!4d1.533152!16s%2Fg%2F11s57f9zjl?authuser=0"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <p className="location-house-section-details-address">
                Edificio Koala, Carrer Ricardo <br /> Curtoys Gotarredona, Local
                8, 07840 Santa Eulària des Riu, <br /> Illes Balears, Spain
              </p>
            </a>

            <p className="purpose-p">{languageMap[globalVariable]?.text44} </p>
            <p className="purpose-p">
              {languageMap[globalVariable]?.text44a} 9AM - 12AM
            </p>
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
export default HomePage;
