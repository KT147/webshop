import { useState } from "react"
import productsFromList from "../../data/products.json"

function MaintainProducts() {

  const [products, setProducts] = useState(productsFromList);

  const deleteItem = (index) => {
    products.splice(index,1)
    setProducts(products.slice())
    localStorage.setItem(("cart"),JSON.stringify(products))
  }

  return (
    <div>
      {products.map((product,index)=>
        <div key={product.id}>
          <img style={{height:"100px"}} src={product.image} alt="" />
          <div>ID: {product.id}</div>
          <div>Title: {product.title}</div>
          <div>Price: {product.price} €</div>
          <div>Description: {product.description}</div>
          <div>Category: {product.category}</div>
          <table>
            <thead><tr><th>Product Rating</th>
                        <th>Product Rating</th></tr></thead>
            <tbody><tr><td>Rate: {product.rating.rate}</td>
                       <td>Count: {product.rating.count}</td></tr></tbody>
          </table>
          <br />
          <button onClick={() => deleteItem (index)}>Delete</button>
          <br /><br /><br /><br /><br /><br />
        </div>)}
    </div>
  )
}

export default MaintainProducts