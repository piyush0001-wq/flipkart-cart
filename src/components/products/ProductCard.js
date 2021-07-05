import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'

function ProductCard({ image, size, title, price, category }) {

  const [cartData, setCartData] = useState([]);



  function handleCart() {
    console.log(image, size, title, price, category);

    db.collection('cart').add({
      title: title,
      price: price,
      image: image,
      category: category,
      quantity: 1,

    })
    alert("added");
  }

  return (
    <div className="productCard">
      <img src={image} alt="" />
      <h4>{title}</h4>
      <div className="description">
        <p>Rs.{price}</p>
        <p>Size : {size}</p>
        <p>{category}</p>
      </div>
      <div className="buy">
        <button>Buy Now</button>
        <button onClick={handleCart}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
