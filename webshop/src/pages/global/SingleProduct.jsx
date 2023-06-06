import React from 'react';
import { useParams } from 'react-router-dom';
import productsFromFile from "../../data/products.json";

function SingleProduct() {
  const params = useParams();
  const found = productsFromFile.find(product => product.id === Number(params.productId));

  return (
    <div>
      { found === undefined ? <div>Product not found!</div> : 
        <div>
          <img src={found.image} alt="" />
          <div>{found.id}</div>
          <div>{found.name}</div>
          <div>{found.price}</div>
          <div>{found.description}</div>
        </div>
      }
    </div>
  )
}

export default SingleProduct