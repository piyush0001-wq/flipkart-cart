import React, { useState } from 'react'
import ProductData from '../../data.json';
import ProductCard from '../products/ProductCard';
import './product.css';

function Products() {

  const [data, setData] = useState(ProductData)

  console.log(data)


  return (
    <div className="products">


      <div className="productsGrid">

        {
          data.map((product) => (
            <ProductCard image={product.image} size={product.size} title={product.title} price={product.price} category={product.category} />
          ))
        }



      </div>
    </div>
  )
}

export default Products
