import { useNavigate, useParams } from "react-router-dom"
// import productsFromFile from "../../data/products.json"
// import { Link } from "react-router-dom"
// import { useRef } from "react"
// import categoriesJSON from "../../data/categories.json"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react";

function EditProduct() {

    const {id} = useParams()
    // const found = productsFromFile.find(product => product.id === Number(id))

    const [product, setProduct] = useState({id: -1})

    const navigate = useNavigate()

    const [categories, setCategories] = useState([])

    useEffect(() => {
      fetch("http://localhost:8090/product?id=" + id)
      .then(res => res.json())
      .then(json => setProduct(json))
    }, [id]);


    // const imageRef= useRef()
    // const idRef= useRef()
    // const titleRef= useRef()
    // const priceRef= useRef()
    // const descriptionRef= useRef()
    // const categoryRef= useRef()
    // const productRatingRef= useRef()
    // const productCountRef= useRef()

    useEffect(() => {
      fetch("http://localhost:8090/categories")
      .then(res => res.json())
      .then(json => setCategories(json))
    }, []);

    const edit = () => {
        if (product.price < 0) {
          toast.error("Hind ei saa olla negatiivne!")
          return
        }
        // const productIndex = productsFromFile.findIndex(product => product.id === Number(id)) 
        // productsFromFile[productIndex] = product

        fetch("http://localhost:8090/products", {
          method: "PUT",
          body: JSON.stringify(product),
          headers: {
            "Content-Type": "application/json"
            // "Authorization" : "Bearer " + sessionStorage.getItem("token")
          }
        })
        .then(res => res.json())
        .then(() => {
          navigate("/admin/maintain-products")
        })

        // if (productIndex !== -1)
        // productsFromFile[productIndex]= {
        //   "image": imageRef.current.value,
        //   "id" : found.id, //FOUND.ID aitab alati leida ühe ja sama toote üles
        //   "title" : titleRef.current.value,
        //   "price" : priceRef.current.value,
        //   "description" : descriptionRef.current.value,
        //   "category" : categoryRef.current.value,
        //   "rating": {
        //    "rate": productRatingRef.current.value,
        //    "count": productCountRef.current.value
        //    }
        // }
    }

    if (product.id === null) {
      return <div>Product not found</div>;
    }

    // {} --> Loading...
    if (product.id === -1) {
      return <div>Loading...</div>;
    }

  // id kaudu tuleks võtta

  // muutmine käib ainult index alusel
  //const index = productsFromList.findIndex(product => product.id === id)
  return (
    <div>
      {/* {[1,2,3]. map(input=> <input ref={idRef} key={input} type=""/>)} */}
      <div>{JSON.stringify(product)}</div>
      <br /><br />
      <label>Image:</label><br />
      <input onChange={(e) => setProduct({...product, "image": e.target.value})} defaultValue={product.image} type="text" /><br />
      <label>ID:</label><br />
      <input onChange={(e) => setProduct({...product, "id": e.target.value})} defaultValue={product.id} type="number" /><br />
      <label>Title:</label><br />
      <input onChange={(e) => setProduct({...product, "title": e.target.value})} defaultValue={product.title} type="text" /><br />
      <label>Price:</label><br />
      <input onChange={(e) => setProduct({...product, "price": e.target.value})} defaultValue={product.price} type="number" /><br />
      <label>Description:</label><br />
      <input onChange={(e) => setProduct({...product, "description": e.target.value})} defaultValue={product.description} type="text" /><br />
      <label>Category:</label><br />
      {/* <input ref={categoryRef} defaultValue={found.category} type="text" /><br /><br /> */}
      <select onChange={(e) => setProduct({...product, "category": e.target.value})} defaultValue={"Default"}>
        <option value ="Default" disabled>Select Category</option>
        {categories.map(category =>
        <option key={category}>{category}</option>)}
      </select> <br /><br />
      <label>Product:</label>
      <input onChange={(e) => setProduct({...product, "rating": {"rate": e.target.value, "count": product.rating.count}})} defaultValue={product.rating?.rate} placeholder="Rating" type="number" />
      <input onChange={(e) => setProduct({...product, "rating": {"rate": e.target.value, "count": product.rating.count}})} defaultValue={product.rating?.count} placeholder="Count" type="number" /><br /><br />
      {/* <Link to="/admin/maintain-products"> */}
      <button className="button" onClick={edit}>Edit</button>
      {/* </Link> */}

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

export default EditProduct