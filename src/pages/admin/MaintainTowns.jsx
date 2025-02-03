import { useState } from "react"
import townsJSON from "../../data/shops.json"

function MaintainTowns() {

    const [towns, setTowns] = useState(townsJSON)

    const deleteTown = (index) => {
        townsJSON[index].town= ""
        setTowns(townsJSON.slice())
    }
    return (
    <div>
        {towns.map((town, index)=>
        
            <div key={town}>
                <div>{town.town}</div>
                <button onClick={() => deleteTown (index)} className="button">Delete</button>
                <br /><br />
            </div>)}
    </div>
  )
}

export default MaintainTowns