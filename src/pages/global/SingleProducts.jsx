import { useParams } from "react-router-dom"
import productsFromFile from "../../data/products.json"


function SingleProducts() {

  const {id} = useParams ()
  const found = productsFromFile.find(product => String(product.id) === id)

  if (found === undefined) {
    return <div>Item Not Found</div>
  }

  return (
    <div>
          <img style={{height:"100px"}} src={found.image} alt="" />
          <div>ID: {found.id}</div>
          <div>Title: {found.title}</div>
          <div>Price: {found.price} €</div>
          <div>Description: {found.description}</div>
          <div>Category: {found.category}</div>
          <div>Product Rating Rate: {found.rating.rate}</div>
          <div>Product Rating Count: {found.rating.count}</div>
    </div>
  )
}

export default SingleProducts