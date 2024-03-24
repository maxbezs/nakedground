import Footer from '../components/Footer'
import Header from '../components/Header'
import { useState, useContext } from "react";
import axios from "axios";
import '../styles/UserPage.css';
import LangContext from '../contexts/LangContext';
import languageMap from '../languageMap';

const UserPage = () =>{
    const { globalVariable, updateGlobalVariable } = useContext(LangContext);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState(false)
    const [exist, setExist] = useState(false)

    const sendEmail = async (e) => {
        e.preventDefault();

        const data = {
            email,
            name
        };
        console.log(data);
        try {
            const response = await axios.post(
                "https://nakedground.onrender.com/api/trip-list",
                data
            );
            console.log(response.data.message);
            if(response.data.message ==="Email Sent"){
                setStatus(true)
                setExist(false)
            }
            if(response.data.message ==="Email Exist"){
                setExist(true)
            }
        } catch(err) {
            console.log(err)
        }
        
    };
    return(
        <div>
            <Header />
            <div style={{paddingBlockStart:"77px", backgroundColor:"#EAF7FC"}}>
                <h1 className='hh1'>{languageMap[globalVariable]?.text31}</h1>
                <div className='user'>
                    <p className='purpose-p' style={{maxWidth:"690px", textAlign: "center"}}>                            
                        {languageMap[globalVariable]?.text53}

                    </p>

                    {status ? (
                        <div className='footer-colum'>
                            <p>You are Subscribed!</p>
                        </div>
                        ) : (
                        <form className='footer-colum' style={{gap:"18px"}} onSubmit={sendEmail}>
                            <input className='subscribe-input' type="name" aria-label={languageMap[globalVariable]?.text54} 
                                placeholder={languageMap[globalVariable]?.text54}  required value={name} onChange={(e) => setName(e.target.value)}/>
                            <input className='subscribe-input' type="email" aria-label={languageMap[globalVariable]?.text55} 
                                placeholder={languageMap[globalVariable]?.text55} required value={email} onChange={(e) => setEmail(e.target.value)}/>
                            {exist?(<p>Email Already exist!</p>):null}
                            <button className='subscribe-button' type="submit">{languageMap[globalVariable]?.text31}</button>
                        </form>
                    )}  
                </div>
            </div>
            
            
            <Footer/>
        </div>
    )
}
export default UserPage