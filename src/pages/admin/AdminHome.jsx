import { Link } from "react-router-dom"

function AdminHome() {
  return (
    <div>
      <br /> <br />
      <Link to="/admin/add-product">
      <button>Add Product</button>
      </Link> 

      <Link to="/admin/edit-product">
      <button>Edit Product</button>
      </Link>

      <Link to="/admin/maintain-products">
      <button>Maintain Products</button>
      </Link>

      <Link to="/admin/maintain-categories">
      <button>Maintain Categories</button>
      </Link>

      <Link to="/admin/maintain-shops">
      <button>Maintain Shops</button>
      </Link>
    </div>
  )
}

export default AdminHome