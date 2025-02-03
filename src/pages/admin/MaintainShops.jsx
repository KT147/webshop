// võib teha ka MaintainTowns.jsx
import { useState } from "react"
import shopsJSON from "../../data/shops.json"
import { Link } from "react-router-dom"

function MaintainShops() {
  // Poodide lisamine refide kaudu
  // "name": "Kristiine",
  //       "lat": 59.4273,
  //       "long": 24.7231,
  //       "address": "Endla 45, 10615 Tallinn",
  //       "town": "",
  //       "href": 

  // poe kustutamine

  // poe muutmist ei tee siia lehele, aga EditShop.jsx sisse

  // Town Dropdownist.

  const [shops, setShops] = useState(shopsJSON)

  const deleteshop = (index) => {
    shopsJSON.splice(index,1)
    setShops(shopsJSON.slice())
  }

  return (
    <div>
      {shops.map ((shop,index)=>
      <div key={shop.lat}>
        <div>{shop.name}</div>
        <div>{shop.lat}</div>
        <div>{shop.long}</div>
        <div>{shop.address}</div>
        <div>{shop.town}</div>
        <button className="button" onClick={() => deleteshop (index)}>Delete</button>
        <Link to={"/admin/edit-shops/" + shop.name}>
          <button className="button">Edit Shops</button>
        </Link>
        <br /><br />
      </div>)}
    </div>
  )
}

export default MaintainShops