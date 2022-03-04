import pin from "../images/pin.png";
export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.item.imageUrl} alt="" />
      <div>
        <div className="card-top">
          <img className="card-top-pin" src={pin} alt="" />
          <p className="card-top-location">{props.item.location}</p>
          <a className="card-top-link" href={props.item.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="card-title">{props.item.title}</h2>
        <p className="card-date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card-description">{props.item.description}</p>
      </div>
    </div>
  );
}
