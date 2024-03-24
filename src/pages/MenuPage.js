import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/MenuPage.css';
import firstPage from '../images/menu-uk-1.png'
import secondPage from '../images/menu-uk-2.png'
import thirdPage from '../images/menu-uk-3.png'
import menuFoodEn from '../images/NAKEDGROUND-Food-ENG.pdf'
import menuDrinksEn from '../images/NAKEDGROUND-Drinks-ENG.pdf'
import menuFoodEs from '../images/NAKEDGROUND-Comidas-ESP.pdf'
import menuDrinksEs from '../images/NAKEDGROUND-Bebidas-ESP.pdf'
import LeftColumn from '../images/menu-left.png'
import RightColumn from '../images/menu-right.png'
const MenuPage = () =>{
    return(
        <div>
            <Header />
            <div style={{paddingTop:"77px", position:"relative", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <img className='side-left phh' src={LeftColumn}/>
                <img className='side-right phh' src={RightColumn}/>
                <h2 className='hh2'>ENGLISH</h2>
                <a className='big-links' href={menuFoodEn}>
                    <h3 className='hh2-span big-links' style={{marginTop:"0"}}>Food</h3>
                </a>
                <a className='big-links' href={menuDrinksEn}>
                    <h3 className='hh2-span big-links' style={{marginTop:"0"}}>Drinks</h3>
                </a>
                <h2 className='hh2'>ESPAÑOL</h2>
                <a className='big-links' href={menuFoodEs}>
                    <h3 className='hh2-span big-links' style={{marginTop:"0"}}>Comidas</h3>
                </a>
                <a className='big-links' href={menuDrinksEs}>
                    <h3 className='hh2-span big-links' style={{marginTop:"0"}}>Bebidas</h3>
                </a>
            </div> 
            <Footer/>           
        </div>
    )
}
export default MenuPage