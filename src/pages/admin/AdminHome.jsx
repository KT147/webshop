import { Link } from "react-router-dom"

function AdminHome() {
  return (
    <div>
      <br /> <br />
      <Link to="/admin/add-product">
      <button className="button">Add Product</button>
      </Link> 

      <Link to="/admin/edit-product">
      <button className="button">Edit Product</button>
      </Link>

      <Link to="/admin/maintain-products">
      <button className="button">Maintain Products</button>
      </Link>

      <Link to="/admin/maintain-categories">
      <button className="button">Maintain Categories</button>
      </Link>

      <Link to="/admin/maintain-shops">
      <button className="button">Maintain Shops</button>
      </Link>
    </div>
  )
}

export default AdminHome