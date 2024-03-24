import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import theBest from '../images/the-best.png'
import '../styles/CoffeePage.css';
import beans from '../images/bean-back.jpg'
import TapeStrip from '../images/TapeStrip.png'
import LangContext from '../contexts/LangContext';
import languageMap from '../languageMap';
import { useState,useContext, useEffect } from "react";
const CoffeePage = () =>{
    const { globalVariable, updateGlobalVariable } = useContext(LangContext);

    useEffect(() => {
        console.log("Global Lang: "+ globalVariable);
      }, []);
      return(
        <div>
            <Header />
                <div className='coffeee-section'>
                    <h1 className="hh2" >
                        {languageMap[globalVariable]?.text19}
                    </h1>
                    <p className="hh2-span">{languageMap[globalVariable]?.text20}</p>
                    <div className='bean-p-div'>
                        <p className='bean-p'>
                            {languageMap[globalVariable]?.text50}
                        </p>
                        <hr className='hr-coffee'/>

                        <p className='bean-p'>
                            {languageMap[globalVariable]?.text50a}
                        </p>
                    </div>
                    
                </div>
                <div className='coffee-background'>
                    <video autoPlay muted loop playsInline>
                        <source src='https://github.com/maxbezs/nakedground-front/releases/download/publish/COFFEE-video.mp4' type="video/mp4" />
                    </video>
                    <div className="caption">
                        <img className='tape-strip phh' src={TapeStrip}></img>
                        
                        <img src={theBest} className='the-best-image'></img>
                    </div>
                    
                </div>
                
                <div className='coffee-story'>
                    <p className='bean-p'>
                            {languageMap[globalVariable]?.text51}
                    </p>
                    <hr className='hr-coffee'/>
                    <p className='bean-p'>
                            {languageMap[globalVariable]?.text51a}
                    </p>
                </div>
            <Footer/>
        </div>
    )
}
export default CoffeePage