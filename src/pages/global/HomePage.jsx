import { useState } from "react";
import productsFromFile from "../../data/products.json"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function HomePage() {

  const [products, setProducts] = useState(productsFromFile);

  const addToCart = (singleProduct) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(singleProduct)
    localStorage.setItem("cart", JSON.stringify(cartLS))
    toast.success("Added to cart!")
  }

  const sortAZ = () => {
    const result =products.toSorted((a,b) => a.title.localeCompare(b.title))
    setProducts(result)
  }

  const sortZA = () => {
    const result = products.toSorted((a,b) => b.title.localeCompare(a.title))
    setProducts(result)
  }

  const priceIncrease = () => {
    const result = products.toSorted((a,b) => a.price - b.price)
    setProducts(result)
  }

  const priceDecrease = () => {
    const result = products.toSorted((a,b) => b.price-a.price)
    setProducts(result)
  }

  const ratingIncrease = () => {
    const result = products.toSorted((a,b) => a.rating.rate - b.rating.rate)
    setProducts(result)
  }

  const ratingDecrease = () => {
    const result = products.toSorted((a,b) => b.rating.rate - a.rating.rate)
    setProducts(result)
  }
//const result = products.filter(product=> product.category.includes("men's clothing")) <-- EI TÖÖTA! VÕTAB KA WOMEN'S CLOTHING
  const filterMenClothes = () => {
    const result = products.filter(product=> product.category === "men's clothing")
    setProducts(result)
  }

  const filterWomenClothes = () => {
    const result = products.filter(product=> product.category === "women's clothing")
    setProducts(result)
  }

  const filterElectronics = () => {
    const result = products.filter(product=> product.category === "electronics")
    setProducts(result)
  }

  const filterJewelry = () => {
    const result = products.filter(product=> product.category === "jewelery")
    setProducts(result)
  }

   const resetToOriginal = () =>{
    setProducts(productsFromFile)
   }

  return (
    <div className="products">
      <br />
      <span>Sort From:</span>
      <button onClick={sortAZ}>A-Z</button>
      <button onClick={sortZA}>Z-A</button>
      <button onClick={priceIncrease}>Price Increasing</button>
      <button onClick={priceDecrease}>Price Decreasing</button>
      <button onClick={ratingIncrease}>Rating Increasing</button>
      <button onClick={ratingDecrease}>Rating Decreasing</button>
      <br /> <br />
      <span>Filter by Category:</span>
      <button onClick={filterMenClothes}>Men&apos;s Clothing</button>
      <button onClick={filterWomenClothes}>Women&apos;s Clothing</button>
      <button onClick={filterElectronics}>Electronics</button>
      <button onClick={filterJewelry}>Jewelry</button>
      <button onClick={resetToOriginal}>Reset to Original State</button>
      <br /><br /><br />
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

export default HomePage