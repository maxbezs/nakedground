import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/CareersPage.css";
import { jobPositions, jobPositionsEs } from "../infoList";
import Job from "../components/Job";
import LangContext from "../contexts/LangContext";
import languageMap from "../languageMap";
import { useState, useContext } from "react";

const CareersPage = () => {
  const { globalVariable, updateGlobalVariable } = useContext(LangContext);

  return (
    <div>
      <Header />
      <div className="house-section video-container tt">
        <h1 className="hh2 yj" style={{ color: "white" }}>
          {languageMap[globalVariable]?.text30}
        </h1>
        <p className="hh2-span">{languageMap[globalVariable]?.text61}</p>
      </div>
      <div className="coffee-story">
        <p className="positions-section-desc">
          {languageMap[globalVariable]?.text56}
        </p>
        <hr className="hr-coffee" />
        <p className="positions-section-desc">
          {languageMap[globalVariable]?.text57a}
          <a
            style={{ color: "#05A8D9" }}
            href="mailto:ibizahouse@COFFEEground.coffee"
          >
            ibizahouse@COFFEEground.coffee
          </a>{" "}
          {languageMap[globalVariable]?.text57b}
        </p>
      </div>
      <div className="positions-section">
        <h2 className="hh2">{languageMap[globalVariable]?.text62}</h2>
        {jobPositions[globalVariable].map((list) => (
          <Job
            key={list.jobPosition}
            jobPosition={list.jobPosition}
            jobType={list.jobType}
            jobDescription={list.jobDescription}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default CareersPage;
