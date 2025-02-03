import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import shopsJSON from "../../data/shops.json"
// import location from "../../assets/pin.png"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from "../../components/Changeview";
import { useState } from "react";
const defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [35,41],
  iconAnchor: [12,41],
  popupAnchor: [2, -20]
})
L.Marker.prototype.options.icon = defaultIcon;


function Shops() {

  const [center, setCenter] = useState([59.4378, 24.7385]);
  const [zoom, setZoom] = useState(6);

  const setCenterAndZoom = (lat, long, zoom) => {
    setCenter([lat, long]);
    setZoom([zoom]);
    //--->
  }

  return (
    <div>
      <button className="button" onClick={() => setCenterAndZoom(59.4378,24.7385,6)}>All shops</button>
      {/* {* seda ei pea hetkel.map tegema: aga onClick sees peab ilmuma vaid selle linna poed} */}
      <button className="button" onClick={() => setCenterAndZoom(59.4378,24.7385,13)}>Tallinn</button>
      <button className="button" onClick={() => setCenterAndZoom(58.3589,26.6771,12)}>Tartu</button>
      <button className="button" onClick={() => setCenterAndZoom(58.2655,22.5153,11)}>Kuressaare</button>
      <br /><br />
       {/* {* siin peab kodus tegema, et kui valitakse Tallinn, siis näidatakse vaid Tallinn poode} */}
      {shopsJSON.map(shop => 
      <button className="button" key={shop.name} 
        onClick={() => setCenterAndZoom(shop.lat,shop.long, 13)}>{shop.name}</button>)}

      <MapContainer style={{height: "300px"}} center={[59.4378, 24.7385]} zoom={6} scrollWheelZoom={false}>
        <ChangeView center={center} zoom={zoom}/>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {shopsJSON.map(shop => (
        <Marker key={shop.name} position={[shop.lat, shop.long]}>
          <Popup>
            {shop.name} <br /> 
            <a target="_blank" href={shop.href}>{shop.address}</a>
          </Popup>
        </Marker>))}
        
      </MapContainer>
    </div>
  )
}

export default Shops