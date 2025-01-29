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

  const product = {
    "id": idRef.current.value,
    "title": titleRef.current.value,
    "price": priceRef.current.value,
    "description": descriptionRef.current.value,
    "category": categoryRef.current.value,
    "image": imageRef.current.value,
  }
    productsFromFile.push(product)
  




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
      <button onClick={add}>Add Item</button>
    </div>
  )
}

export default AddProduct