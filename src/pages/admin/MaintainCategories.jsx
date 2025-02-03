import { useRef, useState } from "react"
import categoriesJSON from "../../data/categories.json"

function MaintainCategories() {

  const [categories, setCategories] = useState(categoriesJSON)

  const categoryRef = useRef()

  const deleteCategory = (index) => {
    categoriesJSON.splice(index,1)
    setCategories(categoriesJSON.slice())
  }

  const addCategory = () => {
    categoriesJSON.push(categoryRef.current.value)
    setCategories(categoriesJSON.slice())
  }

  return (
    <div>
      <label>Category</label><br />
      <input ref={categoryRef} type="text" /><br />
      <button onClick={addCategory}>Add</button>
      {categories.map((category, index)=> 
        <div key={category}>
          {category}
          <button onClick={() => deleteCategory(index)}>X</button>
        </div>)}
    </div>
  )
}

export default MaintainCategories