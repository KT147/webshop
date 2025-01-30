import { useParams } from "react-router-dom"
import productsFromFile from "../../data/products.json"
import { Link } from "react-router-dom"
import { useRef } from "react"

function EditProduct() {

    const {id} = useParams()
    const found = productsFromFile.find(product => product.id === Number(id))

    const imageRef= useRef()
    const idRef= useRef()
    const titleRef= useRef()
    const priceRef= useRef()
    const descriptionRef= useRef()
    const categoryRef= useRef()
    const productRatingRef= useRef()
    const productCountRef= useRef()

    const edit = () => {
        const productIndex = productsFromFile.findIndex(product => product.id === Number(id)) 
        productsFromFile[productIndex]= {
          "image": imageRef.current.value,
          "id" : idRef.current.value,
          "title" : titleRef.current.value,
          "price" : priceRef.current.value,
          "description" : descriptionRef.current.value,
          "category" : categoryRef.current.value,
          "rating": {
           "rate": productRatingRef.current.value,
           "count": productCountRef.current.value
           }
        }
    }
    if (!found) {
      return <div>Product not found</div>;
  }

  // id kaudu tuleks võtta

  // muutmine käib ainult index alusel
  //const index = productsFromList.findIndex(product => product.id === id)
  return (
    <div>
      <label>Image:</label><br />
      <input ref={imageRef} defaultValue={found.image} type="text" /><br />
      <label>ID:</label><br />
      <input ref={idRef} defaultValue={found.id} type="number" /><br />
      <label>Title:</label><br />
      <input ref={titleRef} defaultValue={found.title} type="text" /><br />
      <label>Price:</label><br />
      <input ref={priceRef} defaultValue={found.price} type="number" /><br />
      <label>Description:</label><br />
      <input ref={descriptionRef} defaultValue={found.description} type="text" /><br />
      <label>Category:</label><br />
      <input ref={categoryRef} defaultValue={found.category} type="text" /><br /><br />
      <label>Product:</label>
      <input ref={productRatingRef} defaultValue={found.rating.rate} placeholder="Rating" type="number" />
      <input ref={productCountRef} defaultValue={found.rating.count} placeholder="Count" type="number" /><br /><br />
      <Link to="/admin/maintain-products">
      <button className="button" onClick={edit}>Edit</button>
      </Link>
    </div>
  )
}

export default EditProduct