import { useRef } from "react"
import shopsJSON from "../../data/shops.json"
import { Link, useParams } from "react-router-dom"

function EditShops() {

    const {name} = useParams()
    const found = shopsJSON.find(shop => shop.name=== name)

    const nameRef = useRef()
    const latRef = useRef()
    const longRef = useRef()
    const addressRef = useRef()
    const cityRef = useRef()
    const hrefRef = useRef()

    const edit = () => {
        const shopsIndex = shopsJSON.findIndex(shop => shop.name=== name)
        shopsJSON[shopsIndex] = {
            "name": nameRef.current.value,
            "lat": latRef.current.value,
            "long": longRef.current.value,
            "address": addressRef.current.value,
            "town": cityRef.current.value,
            "href": hrefRef.current.value,
        }
    }

  return (
    <div>
        <label>Name</label> <br />
        <input ref={nameRef} defaultValue={found.name} type="text" /> <br />
        <label>Latitude</label> <br />
        <input ref={latRef} defaultValue={found.lat} type="number" /> <br />
        <label>Longitude</label> <br />
        <input ref={longRef} defaultValue={found.long} type="text" /> <br />
        <label>Address</label> <br />
        <input ref={addressRef} defaultValue={found.address} type="text" /> <br />
        <label>City</label> <br />
        <select ref={cityRef} defaultValue={found.town}>
            {shopsJSON.map(shop=> <option key={shop.name}>{shop.town}</option>)}
        </select> <br />
        <label>HREF</label> <br />
        <input ref={hrefRef} defaultValue={found.href} type="text" /> <br />
        <Link to="/admin/maintain-shops">
            <button onClick={edit} className="button">Edit</button>
        </Link>
    </div>
  )
}

export default EditShops