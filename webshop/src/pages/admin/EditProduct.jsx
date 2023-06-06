import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productsFromFile from '../../data/products.json';

function EditProduct() {
  const params = useParams();
  // params.id; // <---- id kättesaamine

  const found = productsFromFile.find(product => product.id === Number(params.id));
  // const found = productsFromFile.find(product => product.name === params.productName);
  // const { id } = useParams();

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();

  const navigate = useNavigate();

  const changeProduct = () => {
    // MUUTMINE JA KUSTUTAMINE MÕLEMAD KÄIVAD JÄRJEKORRANUMBRI ALUSEL (index)
    const index = productsFromFile.findIndex(product => product.id === Number(params.id));
    productsFromFile[index] = {
      "id": Number(idRef.current.value),
      "image": imageRef.current.value,
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.checked
    }
    navigate("/admin/maintain-products");
  }

  return (
    <div>
      { found === undefined ? <div>Product not found</div> : 
        <div>
          <label>Id</label><br />
          <input ref={idRef} type="number" defaultValue={found.id} /> <br />
          <label>Name</label><br />
          <input ref={nameRef} type="text" defaultValue={found.name} /> <br />
          <label>Price</label><br />
          <input ref={priceRef} type="number" defaultValue={found.price} /> <br />
          <label>Image</label><br />
          <input ref={imageRef} type="text" defaultValue={found.image} /> <br />
          <label>Category</label><br />
          <input ref={categoryRef} type="text" defaultValue={found.category} /> <br />
          <label>Description</label><br />
          <input ref={descriptionRef} type="text" defaultValue={found.description} /> <br />
          <label>Active</label><br />
          <input ref={activeRef} type="checkbox" defaultChecked={found.active} /> <br />
          <button onClick={changeProduct}>Change</button>
        </div>
      }
    </div>
  )
}

export default EditProduct