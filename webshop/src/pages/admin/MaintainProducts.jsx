import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";
import { Link } from 'react-router-dom';
import "../../css/MaintainProducts.css";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
                                //   0       1         2     3
  const deleteProduct = () => { // ["BMW", "Tesla", "Nobe", "Opel"]
    // .splice() <-- kustutamiseks   (mitmendat,mitu tk)
    productsFromFile.splice(0,1);
    setProducts(productsFromFile.slice());
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Delete/Edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map( product =>
            <tr key={product.id} className={product.active === true ? "active" : "inactive"}>
              <td><img src={product.image} alt="" /></td>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>
                <Link to={"/admin/edit-product/" + product.id}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deleteProduct()}>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default MaintainProducts