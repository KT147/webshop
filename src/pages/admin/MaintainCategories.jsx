import { useRef, useState } from "react"
import categoriesJSON from "../../data/categories.json"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MaintainCategories() {

  const [show, setShow] = useState(false)

  const [idToBeDeleted, setIdToBeDeleted] = useState(-1)
  //const idToBeDeletedRef = useRef() --sama

  const handleClose = () => setShow(false)
  const handleShow = (index) => {
    setShow(true)
    setIdToBeDeleted(index);
    // idToBeDeletedRef.current = index
  }

  const [categories, setCategories] = useState(categoriesJSON)

  const categoryRef = useRef()

  const deleteCategory = () => {
    // id (idToBeRef.current !== -1)
    if (idToBeDeleted!== -1) {
    categoriesJSON.splice(idToBeDeleted,1)
    setCategories(categoriesJSON.slice())
    }
    handleClose();
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
          <button onClick={() => handleShow(index)}>X</button>
        </div>)}
        <br />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deleting category</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are about to delete a category. This is irreversible!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteCategory}>
            Yes, I want to delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MaintainCategories