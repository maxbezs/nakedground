import info1 from '../images/info-1.png'
import info2 from '../images/info-2.png'
import info3 from '../images/info-3.png'
import TapeStrip2 from '../images/TapeStrip2.png'
import TapeStrip3 from '../images/TapeStrip3.png'
import TapeStrip from '../images/TapeStrip.png'
import LangContext from '../contexts/LangContext';
import languageMap from '../languageMap';
import { useState,useContext } from "react";

const Info = () =>{
    const { globalVariable, updateGlobalVariable } = useContext(LangContext);

  return (
    <div className="oiu phh">
        <div className='info phh'>
            <div className='info-section'>
                <img style={{width:'406px'}} src={info1}/>
                <h3 className='info-h3'>{languageMap[globalVariable]?.text5}</h3>
                <p className='bean-p' style={{paddingInline:"36px", boxSizing:"border-box"}}>
                {languageMap[globalVariable]?.text6a}<br/><br/>

                {languageMap[globalVariable]?.text6b}<br/><br/>

                {languageMap[globalVariable]?.text6c}
                </p>
                <div className="info-subsection">
                <p className="info-pp">{languageMap[globalVariable]?.text7}</p>
                <p className="info-pp2">{languageMap[globalVariable]?.text8}</p>
            </div>
            </div>
            <div className='info-section'>
                <img style={{width:'406px'}} src={info2}/>
                <h3 className='info-h3'>{languageMap[globalVariable]?.text9}</h3>
                <p className='bean-p' style={{paddingInline:"36px", boxSizing:"border-box"}}>
                {languageMap[globalVariable]?.text10a}<br/><br/>

                {languageMap[globalVariable]?.text10b}<br/><br/>

                {languageMap[globalVariable]?.text10c}
                </p>
                <div>
                <p className="info-pp">{languageMap[globalVariable]?.text11}</p>
                <p className="info-pp2">{languageMap[globalVariable]?.text12}</p>
            </div>
            </div>
            <div className='info-section'>
                <img style={{width:'406px'}} src={info3}/>
                <h3 className='info-h3'>{languageMap[globalVariable]?.text13}</h3>
                <p className='bean-p' style={{paddingInline:"36px", boxSizing:"border-box"}}>
                    {languageMap[globalVariable]?.text14a}<br/><br/>

                    {languageMap[globalVariable]?.text14b}<br/><br/>

                    {languageMap[globalVariable]?.text14c}
                </p>
                <div>
                <p className="info-pp">{languageMap[globalVariable]?.text15}</p>
                <p className="info-pp2">{languageMap[globalVariable]?.text16}</p>
            </div>
            </div>
        </div>
        <div className="info-subsections">
            
            
            
        </div>
    </div>
        
    )
}

export default Info

