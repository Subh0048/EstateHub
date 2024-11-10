import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude,item.longitude]}>
    <Popup>
      <div className="popcontainer">  
        <img src={item.images} alt="error" />
        <div className="textcontainer">
          <Link to={`/${item.id}`}>{item.title}</Link>
          <span className="bed">{item.bedroom} bedroom</span>
          <b>${item.price}</b>
        </div>
      </div>
    </Popup>
  </Marker>
  );
}

export default Pin;
