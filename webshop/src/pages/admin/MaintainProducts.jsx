import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";

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
      {products.map( product =>
        <div key={product.id}>
          <img src={product.image} alt="" />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <div>{product.category}</div>
          <div>{product.active}</div>
          <button>Edit</button>
          <button onClick={() => deleteProduct()}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default MaintainProducts