import globe from "../images/globe.png";
export default function Nav() {
  return (
    <div className="nav">
      <img className="nav-logo" src={globe} alt="" />
      <h3 className="nav-title">my travel journal</h3>
    </div>
  );
}
