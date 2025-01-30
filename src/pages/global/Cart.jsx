import { useState } from "react"
import { useEffect } from "react";


function Cart() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || [] );

  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
    .then(res => res.json())
    .then(json => setParcelMachines(json))
  }, []);


  const deleteItem = (index) =>{
    products.splice(index,1)
    setProducts(products.slice())
    localStorage.setItem("cart", JSON.stringify(products))
  }

  const emptyCart = () => {
    setProducts([])
    localStorage.setItem("cart", JSON.stringify([]))
  }

  const calculateTotal = () => {
    let sum= 0;
    products.forEach(product=> sum = sum + product.price)
    return sum;
  }

  return (
    <div>
      <br />
      {products.length>0 && <button onClick={() => emptyCart()}>Empty Cart</button>}
      {products.length === 0 && <div>Cart is Empty</div>}
      {products.length> 0 && <div>Total: {calculateTotal()} €</div>}
      <br />
      <br />
      {products.map((product,index)=>
      <div key={index}>
        <img style={{width: "100px"}} src={product.image} alt="" />
        <div>{product.title}</div>
        <div>{product.price} €</div> <br />
        <button onClick={() => deleteItem(index)}>Delete item</button> <br /><br />
      </div>)}

      <select>
        {parcelMachines
            .filter(pm => pm.A0_NAME === "EE")
            .map(pm=>
          <option key={pm.NAME}>
            {pm.NAME}
          </option>
        )}
      </select>
    </div>
  )
}

export default Cart