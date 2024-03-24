import '../styles/Line.css';
  
const Line = () =>{
  return (
    <div className="marquee">
    <ul className="marquee__content">
      <li><p className="texxt">A COFFEE HOUSE <span> with a kick!</span></p></li>
      <li><p className="texxt">A COFFEE HOUSE <span> with a kick!</span></p></li>
      <li><p className="texxt">A COFFEE HOUSE <span> with a kick!</span></p></li>
      <li><p className="texxt">A COFFEE HOUSE <span> with a kick!</span></p></li>
      <li><p className="texxt">A COFFEE HOUSE <span> with a kick!</span></p></li>
      <li><p className="texxt">A COFFEE HOUSE <span> with a kick!</span></p></li>
    </ul>

    <ul aria-hidden="true" className="marquee__content">
      <li><p className="texxt">A COFFEE HOUSE <span> with a kick!</span></p></li>
      <li><p className="texxt">A COFFEE HOUSE <span> with a kick!</span></p></li>
      <li><p className="texxt">A COFFEE HOUSE <span> with a kick!</span></p></li>
      <li><p className="texxt">A COFFEE HOUSE <span> with a kick!</span></p></li>
      <li><p className="texxt">A COFFEE HOUSE <span> with a kick!</span></p></li>
      <li><p className="texxt">A COFFEE HOUSE <span> with a kick!</span></p></li>
    </ul>
  </div>
  );
}
export default Line