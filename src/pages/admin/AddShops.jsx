import { useRef } from "react"
import shopsJSON from "../../data/shops.json"
import townsJSON from "../../data/towns.json"
import { ToastContainer, toast } from 'react-toastify';


function AddShops() {

    const nameRef = useRef()
    const latRef = useRef()
    const longRef = useRef()
    const addressRef = useRef()
    const cityRef = useRef()
    const hrefRef = useRef()

    const newShop = () => {
        const product= {
            "name": nameRef.current.value,
            "lat": latRef.current.value,
            "long": longRef.current.value,
            "address": addressRef.current.value,
            "city": cityRef.current.value,
            "href": hrefRef.current.value,
        }
    shopsJSON.push(product)
    toast.success("Shop successfully added!")

        nameRef.current.value=""
        latRef.current.value=""
        longRef.current.value=""
        addressRef.current.value=""
        cityRef.current.value=""
        hrefRef.current.value=""
    }

  return (
    <div>
        <label>Name</label> <br />
        <input ref={nameRef} type="text" /> <br />
        <label>Latitude</label> <br />
        <input ref={latRef} type="number" /> <br />
        <label>Longitude</label> <br />
        <input ref={longRef} type="text" /> <br />
        <label>Address</label> <br />
        <input ref={addressRef} type="text" /> <br />
        <label>City</label> <br />
        <select ref={cityRef} >
            {townsJSON.map(town=> <option key={town}>{town}</option>)}
        </select> <br />
        <label>HREF</label> <br />
        <input ref={hrefRef} type="text" /> <br />
        <button className="button" onClick={newShop}>Enter</button>

        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
    </div>
  )
}

export default AddShops