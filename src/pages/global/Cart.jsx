import { useState } from "react"
import { useEffect } from "react";
import styles from "../../css/Cart.module.css"
import Payment from "../../components/Payment";
import { ToastContainer, toast } from 'react-toastify';


function Cart() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || [] );

  const [parcelMachines, setParcelMachines] = useState([]);

  const [parcelMachineCountry, setParcelMachineCountry] = useState("EE")

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
    .then(res => res.json())
    .then(json => setParcelMachines(json))
  }, []);

  useEffect(() => {
    const paymentStarted = localStorage.getItem("paymentStarted");

    if (paymentStarted === "true") {
      toast.success('Payment was successful');
      localStorage.removeItem("paymentStarted");
    }
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
    products.forEach(product=> sum = sum + product.specifiedProduct.price * product.specifiedQuantity)
    return sum;
  }

  const decreaseQuantity = (product) => {
      product.specifiedQuantity--
      if (product.specifiedQuantity === 0) {
        const index = products.indexOf(product) // terve objekti abil indexi leidmine
        // const index = products. findIndex(p=> p.id === id) ühe omaduse abil indexi leidmine
        // const found = products. find(p=> p.id === id) ühe omaduse abil objekti enda leidmine
        deleteItem(index)
      }
      setProducts(products.slice())
      localStorage.setItem("cart", JSON.stringify(products))
  }

  const increaseQuantity = (product) => {
    product.specifiedQuantity++
    setProducts(products.slice())
    localStorage.setItem("cart", JSON.stringify(products))
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
      <div key={index} className={styles.product}>
        <img className={styles.image} src={product.specifiedProduct.image} alt="" />
        <div className={styles.title}>{product.specifiedProduct.title}</div>
        <div className={styles.price}>{product.specifiedProduct.price} €</div>
        <div className={styles.quantity}>
          <img onClick={() => decreaseQuantity(product)} className="icon" src="/minus.png" alt="" />
          <div>{product.specifiedQuantity} pcs</div> 
          <img onClick={() => increaseQuantity(product)} className="icon" src="/plus.png" alt="" />
        </div>
        <div className={styles.price}>{product.specifiedProduct.price * product.specifiedQuantity} €</div> <br />
        {/* <button className={styles.button} onClick={() => deleteItem(index)}>Delete item</button> <br /><br /> */}
        <img onClick={() => deleteItem(index)} className="icon" src="/delete.png" alt="" />
      </div>)}

      {products.length > 0 && 
      <div>
      <select>
        <option>EE</option>
        <option>LV</option>
        <option>LT</option>
      </select>

        <select>
        {parcelMachines
            .filter(pm => pm.A0_NAME === parcelMachineCountry)
            .map(pm=>
          <option key={pm.NAME}>
            {pm.NAME}
          </option>
        )}
      </select>
      <button onClick={() => setParcelMachineCountry("EE")}>EE</button>
      <button onClick={() => setParcelMachineCountry("LV")}>LV</button>
      <button onClick={() => setParcelMachineCountry("LT")}>LT</button>
      {calculateTotal() < 7000 ? <Payment sum={calculateTotal()}/> : <div>The sum is too large!</div>}
      </div>}

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

export default Cart