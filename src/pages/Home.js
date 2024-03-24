import React from 'react';
import '../styles/App.css';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image34 from '../images/img22.jpg';
import coffeebags from '../images/coffeeshopbags_large.jpg';
import coffeepods from '../images/coffeeshoppods.jpg';
import coffeetin from '../images/coffeetinshop_large.jpg';
import towel from '../images/IMG_4369.jpg';
import bottle from '../images/IMG_4368.jpg';
import coala from '../images/IMG_4363.jpg';
import freeze from '../images/IMG_4365.jpg';

const Home = () =>{

    const delay = 2500;
    const timeoutRef = React.useRef(null);
    const [index, setIndex] = React.useState(0);
    const [show, setShow] = React.useState(false)
    const colors = [image2, image1, image3, image4, image5];

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);

    return(
       <div className="App">
      <div className="div1-announcment">
        <div className="div-announcment">
          <p className="p-announcment">
            <a className='a-announcment' href="">FREE DELIVERY OVER £30 - SHOP NOW</a>
          </p>
        </div>
      </div>
      <header className='header-home'>
        <div className='header-wrapper'>
          <div className='header-left-links'>
            <button className='header-open-navigation' aria-label="Open navigation">
              <span className='header-open-navigation-tablet-and-up'>
                <svg className="Icon Icon--nav" role="presentation" viewBox="0 0 20 14">
                  <path d="M0 14v-1h20v1H0zm0-7.5h20v1H0v-1zM0 0h20v1H0V0z" fill="currentColor"></path>
                </svg>
              </span>
              <span className="hidden-phone">
                <svg className="Icon Icon--nav-desktop" role="presentation" viewBox="0 0 24 16">
                  <path d="M0 15.985v-2h24v2H0zm0-9h24v2H0v-2zm0-7h24v2H0v-2z" fill="currentColor"></path>
                </svg>
              </span>
            </button>
            <nav className='header-main-navigation' aria-label="Main navigation">
              <ul className='header-main-navigation-ul'>
                <li className='header-main-navigation-li' >
                  <a className='header-main-navigation-li-a' href="https://www.tripadvisor.com/Restaurant_Review-g642208-d24851249-Reviews-NAKED_GROUND-Santa_Eulalia_del_Rio_Ibiza_Balearic_Islands.html#REVIEWS">
                    Our Houses
                  </a>
                </li>
                <li className='header-main-navigation-li'>
                  <a className='header-main-navigation-li-a' href="tel:+34641773346">
                    Contact us
                  </a>
                </li>
                <li className='header-main-navigation-li'>
                  <a className='header-main-navigation-li-a' href="https://cdn.shopify.com/s/files/1/0598/9367/8286/files/Naked_Ground_A3_Food_Menu_-_English_trim_bleed.pdf?v=1680277399">
                    Menu
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='header-center-links'>
            <h1 className='header-center-links-h1-a-img'>NAKED GROUND</h1>
          </div>
          <div className='header-right-links'>
            <nav className='header-right-links-nav'>
              <ul className='header-right-links-nav-ul'>
                <li className='header-main-navigation-li'>
                  <a className='header-main-navigation-li-a' href="https://www.instagram.com/nakedground.es/" target="_blank" rel="noreferrer noopener">
                    @nakedground.es
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <header className='mob-header'>
        <div className='header-wrapper'>
          <div className='mob-div-nav'>
            <button onClick={()=>setShow(true)} className='mob-nav' aria-label="Open navigation">
              <span className='mob-nav-span'>
                <svg style={{height: "14px",width: "20px"}} role="presentation" viewBox="0 0 20 14">
                  <path d="M0 14v-1h20v1H0zm0-7.5h20v1H0v-1zM0 0h20v1H0V0z" fill="currentColor"></path>
                </svg>
              </span>
            </button>
          </div>
          {
            show?
            <section className='ph-section-side'>
              <header className='ph-section-side-header'>
                <button onClick={()=>setShow(false)} className='ph-section-side-header-button' aria-label="Close navigation">
                  <svg className='ph-close-icon' role="presentation" viewBox="0 0 16 14">
                    <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path>
                  </svg>
                </button>
              </header>
              <div className='ph-section-side-main'>
                <div className='ph-section-side-main-links'>
                  <nav className='ph-section-side-main-links-nav' aria-label="Sidebar navigation">
                    <div className='ph-section-side-main-links-link'>
                      <button className='ph-section-side-main-links-link-button'>
                        <a className='header-main-navigation-li-a' style={{color: "#fff"}} href="https://www.tripadvisor.com/Restaurant_Review-g642208-d24851249-Reviews-NAKED_GROUND-Santa_Eulalia_del_Rio_Ibiza_Balearic_Islands.html#REVIEWS">
                          Our Houses
                        </a>
                      </button>
                    </div>
                    <div className='ph-section-side-main-links-link'>
                      <button className='ph-section-side-main-links-link-button'>
                        <a className='header-main-navigation-li-a' style={{color: "#fff"}} href="tel:+34641773346">
                          Contact us
                        </a>
                      </button>
                    </div>
                    <div className='ph-section-side-main-links-link'>
                      <button className='ph-section-side-main-links-link-button'>
                        <a className='header-main-navigation-li-a' style={{color: "#fff"}} href="https://cdn.shopify.com/s/files/1/0598/9367/8286/files/Naked_Ground_A3_Food_Menu_-_English_trim_bleed.pdf?v=1680277399">
                          Menu
                        </a>
                      </button>
                    </div>
                  </nav>
                  <ul className='footer-div-div-div1-ul'>
                  <li className='footer-div-div-div1-ul-li' style={{color:"white"}}>
                    <a className='footer-div-div-div1-ul-li-a' href="https://www.facebook.com/refy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <span>
                        <svg className='footer-div-div-div1-ul-li-a-svg' role="presentation" viewBox="0 0 9 17">
                          <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li className='footer-div-div-div1-ul-li' style={{color:"white"}}>
                    <a className='footer-div-div-div1-ul-li-a' href="https://www.instagram.com/nakedground.es/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <span>
                        <svg className='footer-div-div-div1-ul-li-a-svg'  role="presentation" viewBox="0 0 32 32">
                          <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li className='footer-div-div-div1-ul-li' style={{color:"white"}}>
                    <a className='footer-div-div-div1-ul-li-a' href="https://www.tiktok.com/@nakedground.es" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                      <span>
                        <svg style={{color: "#fff", verticalAlign: "middle"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> 
                          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" fill="white"></path> 
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li className='footer-div-div-div1-ul-li' style={{color:"white"}}>
                    <a className='footer-div-div-div1-ul-li-a' href="https://www.youtube.com/@nakedgroundlive" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <span>
                        <svg className='footer-div-div-div1-ul-li-a-svg' role="presentation" viewBox="0 0 33 32">
                          <path d="M0 25.693q0 1.997 1.318 3.395t3.209 1.398h24.259q1.891 0 3.209-1.398t1.318-3.395V6.387q0-1.997-1.331-3.435t-3.195-1.438H4.528q-1.864 0-3.195 1.438T.002 6.387v19.306zm12.116-3.488V9.876q0-.186.107-.293.08-.027.133-.027l.133.027 11.61 6.178q.107.107.107.266 0 .107-.107.213l-11.61 6.178q-.053.053-.107.053-.107 0-.16-.053-.107-.107-.107-.213z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <aside>
              
              </aside>
            </div>
          </section> : null
          }
           <h1 className='header-center-links-h1-a-img' style={{fontSize: "24px", lineHeight: "1"}}>NAKED GROUND</h1>
        </div>
      </header>
      <main className='main'>
        <div className='main-div'>
          <section className='main-div-section'>
            <div style={{textAlign: "center"}}>
              <div className="slideshow">
                <div
                  className="slideshowSlider"
                  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                  {colors.map((backgroundColor, index) => (
                    <div
                      className="slide"
                      key={index}>
                        <img className='slider-img' src={backgroundColor}/>
                    </div>
                  ))}
                </div>

                <div className="slideshowDots">
                  {colors.map((_, idx) => (
                    <div
                      key={idx}
                      className={`slideshowDot${index === idx ? " active" : ""}`}
                      onClick={() => {
                        setIndex(idx);
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='main-div1'>
          <section className='main-div1-section'>
            <div className='main-div1-section-div'>
              <div className='main-div1-section-div-div'>
                <h2>
                  MORE THAN COFFEE
                </h2>
                <div className='main-div1-section-div-div-p'>
                  <p>
                    "NAKED GROUND is more than coffee; we are a place where you belong. NAKED
GROUND is a daily habit which brings positivity and company to everyone's day"</p>
                </div>
                <a href="#"className='main-div1-section-div-div-a'>
                  SHOP ALL
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className='main-div2'>
          <section  className='main-div2-section'>
            <div className='main-div2-section-div'>
              <div className='main-div2-section-div-div'>
                <div className='pc'>
                  <img src={image34} alt="" />
                </div>
                <div className='ph' >
                  <img src={image5} alt=""/>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='main-div3'>
          <section className='main-div3-section'>
            <div className='main-div3-section-div'>
              <header className='main-div3-section-div-header'>
                <h3 className='main-div3-section-div-header-h3'>
                  SHOP NOW
                </h3>
                <h2 className='main-div3-section-div-header-h2'>
                  NAKED GROUND
                </h2>
              </header>
            </div>
          </section>
        </div>
        <div className='main-div4'>
          <section className='main-div4-section'>
            <div className='main-div4-section-div'>
              <div className='main-div4-section-div-div'>
                <div className='main-div4-section-div-div-div'>
                    <img className='ff' alt="" src={coffeetin} />
                    <img style={{height: "20vh"}} alt="" src={coffeebags} />
                    <img className='ff' alt="" src={coffeepods} />
                    <img className='ff' alt="" src={towel} />
                    <img className='ff' alt="" src={bottle} />
                    <img className='ff' alt="" src={coala} />
                    <img className='ff' alt="" src={freeze} />
                </div>
              </div>
              <div className='main-div4-section-div-div1'>
                <div className='main-div4-section-div-div1-div'>
                  <a className='main-div4-section-div-div1-div-a' href="#">SHOP COLLECTION</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className='div-footer'>
        <footer className='footer'>
          <div className='footer-div'>
            <div className='footer-div-div'>
              <div className='footer-div-div-div1'>
                <h2 className='footer-div-div-div1-h2'>
                  NAKED GROUND
                </h2>
                <p>We are a place where you belong.</p>
                <ul className='footer-div-div-div1-ul'>
                  {/**<li className='footer-div-div-div1-ul-li'>
                    <a className='footer-div-div-div1-ul-li-a' href="https://www.facebook.com/refy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <span>
                        <svg className='footer-div-div-div1-ul-li-a-svg' role="presentation" viewBox="0 0 9 17">
                          <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                        </svg>
                      </span>
                    </a>
                    </li>**/}
                  <li className='footer-div-div-div1-ul-li'>
                    <a className='footer-div-div-div1-ul-li-a' href="https://www.instagram.com/nakedground.es/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <span>
                        <svg className='footer-div-div-div1-ul-li-a-svg'  role="presentation" viewBox="0 0 32 32">
                          <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li className='footer-div-div-div1-ul-li'>
                    <a className='footer-div-div-div1-ul-li-a' href="https://www.tiktok.com/@nakedground.es" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                      <span>
                        <svg style={{color: "#000", verticalAlign: "middle"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> 
                          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" fill="black"></path> 
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li className='footer-div-div-div1-ul-li'>
                    <a className='footer-div-div-div1-ul-li-a' href="https://www.youtube.com/@nakedgroundlive" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <span>
                        <svg className='footer-div-div-div1-ul-li-a-svg' role="presentation" viewBox="0 0 33 32">
                          <path d="M0 25.693q0 1.997 1.318 3.395t3.209 1.398h24.259q1.891 0 3.209-1.398t1.318-3.395V6.387q0-1.997-1.331-3.435t-3.195-1.438H4.528q-1.864 0-3.195 1.438T.002 6.387v19.306zm12.116-3.488V9.876q0-.186.107-.293.08-.027.133-.027l.133.027 11.61 6.178q.107.107.107.266 0 .107-.107.213l-11.61 6.178q-.053.053-.107.053-.107 0-.16-.053-.107-.107-.107-.213z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='footer-div-div-div2'>
                <h2 className='footer-div-div-div1-h2'>BROWSE</h2>
                <ul className='footer-div-div-div2-ul'>
                  <li className='footer-div-div-div2-ul-li'>
                    <a className='footer-div-div-div2-ul-li-a' href="https://www.tripadvisor.com/Restaurant_Review-g642208-d24851249-Reviews-NAKED_GROUND-Santa_Eulalia_del_Rio_Ibiza_Balearic_Islands.html#REVIEWS">Our Houses</a>
                  </li>
                  <li className='footer-div-div-div2-ul-li'>
                    <a className='footer-div-div-div2-ul-li-a' href="tel:+34641773346">Contact us</a>
                  </li>
                  <li className='footer-div-div-div2-ul-li'>
                    <a className='footer-div-div-div2-ul-li-a' href="#">Privacy Policy</a>
                  </li>
                  <li className='footer-div-div-div2-ul-li'>
                    <a className='footer-div-div-div2-ul-li-a' href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
              <form className='footer-div-div-div3'>
                <h2 className='footer-div-div-div1-h2'>FREE HOLIDAY TO IBIZA!</h2>
                <p>Enter your email address for a chance to win a free holiday to Ibiza!</p>
                <div>
                  <input className='form-input' type="email" aria-label="Enter your email address" 
                  placeholder="Enter your email address" required/>
                  <button type="submit" className='form-button'>Subscribe</button>
                </div>
              </form>
            </div>
            <div className='footer-buttom'>
              <a className='footer-buttom-a' href="/" >© NAKED GROUND</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
    )
}

export default Home