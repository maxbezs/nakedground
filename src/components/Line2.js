import '../styles/Line.css';
  
const Line2 = () =>{
  return (
    <div className="marquee">
    <ul className="marquee__content">
      <li><p className="texxt">MORE <span> than coffee</span></p></li>
      <li><p className="texxt">MORE <span> than coffee</span></p></li>
      <li><p className="texxt">MORE <span> than coffee</span></p></li>
      <li><p className="texxt">MORE <span> than coffee</span></p></li>
      <li><p className="texxt">MORE <span> than coffee</span></p></li>
      <li><p className="texxt">MORE <span> than coffee</span></p></li>
    </ul>

    <ul aria-hidden="true" className="marquee__content">
      <li><p className="texxt">MORE <span> than coffee</span></p></li>
      <li><p className="texxt">MORE <span> than coffee</span></p></li>
      <li><p className="texxt">MORE <span> than coffee</span></p></li>
      <li><p className="texxt">MORE <span> than coffee</span></p></li>
      <li><p className="texxt">MORE <span> than coffee</span></p></li>
      <li><p className="texxt">MORE <span> than coffee</span></p></li>
    </ul>
  </div>
  );
}
export default Line2