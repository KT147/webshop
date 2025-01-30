import { useRef } from "react"
import productsFromFile from "../../data/products.json"


function AddProduct() {


  const idRef= useRef()
  const titleRef= useRef()
  const priceRef= useRef()
  const descriptionRef= useRef()
  const categoryRef= useRef()
  const imageRef= useRef()
  const ratingRateRef= useRef()
  const ratingCountRef= useRef()

  const add = () => {
    const product= {
    "id": Number(idRef.current.value),
    "title": titleRef.current.value,
    "price": Number(priceRef.current.value),
    "description": descriptionRef.current.value,
    "category": categoryRef.current.value,
    "image": imageRef.current.value,
    "rating": {
      "rate": Number(ratingRateRef.current.value),
      "count": Number(ratingCountRef.current.value) 
    }
    // "rating.rate": Number(ratingRateRef.current.value), <--- see oli vale kood
    // "rating.count": Number(ratingCountRef.current.value)
    }
    productsFromFile.push(product)
  
      idRef.current.value = ""
      titleRef.current.value = ""
      priceRef.current.value = ""
      descriptionRef.current.value = ""
      categoryRef.current.value = ""
      imageRef.current.value = ""
      ratingRateRef.current.value = ""
      ratingCountRef.current.value = ""
}


  return (
    <div>
      <h3>Add a New Product:</h3>
      <label>ID:</label><br />
      <input ref={idRef} type="number" /><br /><br />
      <label>Title:</label><br />
      <input ref={titleRef} type="text" /><br /><br />
      <label>Price:</label><br />
      <input ref={priceRef} type="number" /><br /><br />
      <label>Description:</label><br />
      <input ref={descriptionRef} type="text" /><br /><br />
      <label>Category:</label><br />
      <input ref={categoryRef} type="text"/><br /><br />
      <label>Image:</label><br />
      <input ref={imageRef} type="text" /><br /><br />
      <label>Rating Rate:</label><br />
      <input ref={ratingRateRef} type="number" /><br /><br />
      <label>Rating Count:</label><br />
      <input ref={ratingCountRef} type="number" /><br /><br />
      <button className="button" onClick={add}>Add Item</button>
    </div>
  )
}

export default AddProduct