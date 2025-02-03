import { useRef, useState } from "react"
import townsJSON from "../../data/shops.json"
import { Link } from "react-router-dom"

function MaintainTowns() {
    const [towns, setTowns] = useState([...townsJSON.filter(shop => shop.town)])

    const townRef = useRef()

    const deleteTown = (index) => {
        townsJSON.splice(index, 1)
        setTowns(townsJSON.slice())
    }

    const updateTown = (index, newTownName) => {
        const updatedTowns = [...towns]
        updatedTowns[index].town = newTownName
        setTowns(updatedTowns)
}

    return (
    <div>
        {towns.map((town, index) =>
            <div key={town.lat}>
                <input defaultValue={town.town} ref={townRef} type="text" onChange={(e) => updateTown(index, e.target.value)}  /> <br />
                <Link to="/admin/maintain-shops">
                    <button className="button">Edit</button>
                </Link>
                <button onClick={() => deleteTown(index)} className="button">Delete</button>
                <br /><br />
            </div>)}
    </div>
  )
}

export default MaintainTowns
