import React, { useState } from 'react'
import productsFromFile from "../../data/products.json";
import { Link } from 'react-router-dom';

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const sortAZ = () => {
    products.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  }

  const sortPriceAsc = () => {
    products.sort((a,b) => a.price - b.price);
    setProducts(products.slice());
  }

  const sortPriceDesc = () => {
    products.sort((a,b) => b.price - a.price);
    setProducts(products.slice());
  }

  const addToCart = (productClicked) => {
    // cartFromFile.push(productClicked);
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(productClicked);
    localStorage.setItem("cart", JSON.stringify(cartLS));
  }

  return (
    <div>
      <button onClick={sortAZ}>Sort A to Z</button>
      <button onClick={sortZA}>Sort Z to A</button>
      <button onClick={sortPriceAsc}>Sort price ascending</button>
      <button onClick={sortPriceDesc}>Sort price descending</button>
      {products.filter(p => p.active === true).map( product =>
        <div key={product.id}>
          <Link to={"/product/" + product.id}>
            <img src={product.image} alt="" />
            <div>{product.name}</div>
            <div>{product.price}</div>
          </Link>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      )}
    </div>
  )
}

export default HomePage