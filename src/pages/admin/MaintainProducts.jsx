import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom";
// import productsFromList from "../../data/products.json"
import { toast, ToastContainer } from 'react-toastify';
import styles from  "../../css/MaintainProducts.module.css"

function MaintainProducts() {

  const [products, setProducts] = useState([]);

  const searchRef = useRef()

  useEffect(() => {
    fetch("http://localhost:8090/products")
    .then(res => res.json())
    .then(json => setProducts(json))
  }, []);

  const deleteItem = (id) => {
    // const index = productsFromList.findIndex(product => product.id === id)
    // productsFromList.splice(index,1)
    // setProducts(productsFromList.slice())
    // toast.success("Item successfully deleted!")
    fetch("http://localhost:8090/products?id=" +id, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(json => {
      setProducts(json)
    toast.success("Item successfully deleted!")
    })
  }

  const search = () => {
    // const result= productsFromList.filter(product => 
    //   product.title.toLowerCase().includes(searchRef.current.value.toLowerCase()) ||
    //   product.description.toLowerCase().includes(searchRef.current.value.toLowerCase())
    // )
    // setProducts(result)
  }

  return (
    <div>
      <label>Search by Item Name:</label>
      <input onChange={search} ref={searchRef} type="text" />
      <br /><br />
      {products.sort((a,b) => a.id - b.id).map((product)=>
        <div key={product.id} className={product.active ? styles.active : styles.inactive}>
          <img style={{height:"100px"}} src={product.image} alt="" />
          <div><b><u>ID:</u></b> {product.id}</div>
          <div><b><u>Title:</u></b> {product.title}</div>
          <div><b><u>Price:</u></b> {product.price} €</div>
          <div><b><u>Description:</u></b> {product.description}</div>
          <div><b><u>Category:</u></b> {product.category}</div>
          <br />
          <table>
            <thead><tr><th>Product Rating</th>
                        <th>Product Count</th></tr></thead>
            <tbody><tr><td>Rate: {product.rating?.rate}</td>
                       <td>Count: {product.rating?.count}</td></tr></tbody>
          </table>
          <br />
          <button className="button" onClick={() => deleteItem (product.id)}>Delete</button>
          <Link to={"/admin/edit-product/" + product.id }><button className="button">Edit</button></Link>
          <br /><br /><br /><br /><br /><br />
        </div>)}
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

export default MaintainProducts