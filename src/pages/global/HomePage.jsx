import { useState } from "react";
import productsFromFile from "../../data/products.json"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import CarouselGallery from "../../components/CarouselGallery";
import styles from "../../css/HomePage.module.css";
import { useTranslation } from 'react-i18next';

function HomePage() {

  const { t } = useTranslation();

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
      <CarouselGallery/>
      <br />
      <span>{t("home.sort")}</span>
      <button className="button" onClick={sortAZ}>A-Z</button>
      <button className="button" onClick={sortZA}>Z-A</button>
      <button className="button" onClick={priceIncrease}>{t("home.priceIncrease")}</button>
      <button className="button" onClick={priceDecrease}>{t("home.priceDecrease")}</button>
      <button className="button" onClick={ratingIncrease}>{t("home.ratingIncreasing")}</button>
      <button className="button" onClick={ratingDecrease}>{t("home.ratingDecreasing")}</button>
      <br /> <br />
      <span>Filter by Category:</span>
      <button className="button" onClick={filterMenClothes}>{t("home.menclothes")}</button>
      <button className="button" onClick={filterWomenClothes}>{t("home.womenclothing")}</button>
      <button className="button" onClick={filterElectronics}>{t("home.electronics")}</button>
      <button className="button" onClick={filterJewelry}>{t("home.jewelry")}</button>
      <button className="button" onClick={resetToOriginal}>{t("home.reset")}</button>
      <br /><br /><br />
      {products.map(product=>
        <div key={product.id}>
          <img className={product.active ? styles.image : styles.inactive_image} src={product.image} alt="" />
          <div>{product.title}</div>
          <div>{product.price} €</div>
          <button disabled={!product.active} className="button" onClick={()=> addToCart(product)}>Add to Cart</button>
          <br />
          <Link to={"/product/" + product.id}><button className="button">See More</button></Link>
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