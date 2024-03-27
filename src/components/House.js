import { useState, useContext } from "react";
import LangContext from "../contexts/LangContext";
import ngVideo from "../images/NG-video.mp4";
import languageMap from "../languageMap";
const House = () => {
  const { globalVariable, updateGlobalVariable } = useContext(LangContext);
  return (
    <div className="house-section video-container">
      <video autoPlay muted loop playsInline>
        <source src={ngVideo} type="video/mp4" />
      </video>
      <div className="caption">
        <h2 className="hh2" style={{ color: "white" }}>
          {languageMap[globalVariable]?.text17}
        </h2>
        <a className="big-links" href="/">
          <p className="hh2-span big-links">Santa Eularia des riu</p>
        </a>
      </div>
    </div>
  );
};

export default House;
