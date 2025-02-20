import { useContext, useState } from "react";
import productsFromFile from "../../data/products.json"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import CarouselGallery from "../../components/CarouselGallery";
import styles from "../../css/HomePage.module.css";
import { useTranslation } from 'react-i18next';
import SortButtons from "../../components/SortButtons";
import { CartSumContext } from "../../store/CartSumContext";

function HomePage() {

  const { t } = useTranslation();

  const {increase} = useContext(CartSumContext)

  const [products, setProducts] = useState(productsFromFile);

  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    const found = cartLS.find(cartProduct => cartProduct.specifiedProduct.id === productClicked.id)
    if(found !== undefined) {
      // suurenda kogust
      found.specifiedQuantity++
    } else {
      // lisa lõppu.
      cartLS.push({"specifiedQuantity": 1, "specifiedProduct": productClicked})
    }
    localStorage.setItem("cart", JSON.stringify(cartLS))
    increase(productClicked.price)
    toast.success("Added to cart!")
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
      <SortButtons products={products} setProducts={setProducts}/>
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