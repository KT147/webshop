import { useState } from "react";
import productsFromFile from "../../data/products.json"
import { Link } from "react-router-dom";

function HomePage() {

  const [products, setProduct] = useState(productsFromFile);

  const addToCart = (singleProduct) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(singleProduct)
    localStorage.setItem("cart", JSON.stringify(cartLS))
  }

  return (
    <div className="products">
      {products.map(product=>
        <div key={product.id}>
          <img style={{width: "100px"}} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price} €</div>
          <button onClick={()=> addToCart(product)}>Add to Cart</button>
          <br /><br />
          <Link to={"/product/" + product.id}><button>See More</button></Link>
          <br /><br /><br />
        </div>)}
    </div>
  )
}

export default HomePage