import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  return (
    <div>
      {products.map( product =>
        <div key={product.id}>
          <img src={product.image} alt="" />
          <div>{product.name}</div>
          <div>{product.price}</div>
          <button>Add to cart</button>
        </div>
      )}
    </div>
  )
}

export default HomePage