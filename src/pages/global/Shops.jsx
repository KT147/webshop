import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import shopsJSON from "../../data/shops.json"


function Shops() {

  return (
    <div>
      <MapContainer style={{height: "300px"}} center={[59.4378, 24.7385]} zoom={6} scrollWheelZoom={false}>
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