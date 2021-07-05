import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import "./cart.css"

function Cart() {

  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    db.collection('cart').onSnapshot(snapshot => {
      setCartItems(snapshot.docs.map(doc => ({
        data: doc.data(),
        id: doc.id,

      }
      )))
    })
  }, [])



  gettotalPrice();
  console.log(cartItems);

  function handleRemoveItem(id) {
    if (window.confirm(`Did you want to remove this item?`)) {
      db.collection('cart').doc(id).delete();
    }
  }

  function handleAddQuantity(id) {


    db.collection('cart').doc(id).update({
      quantity: quantity + 1
    })
    setQuantity(quantity + 1)

  }
  function handleLessQuantity(id) {
    db.collection('cart').doc(id).update({
      quantity: quantity - 1
    })
    setQuantity(quantity - 1)
  }

  return (
    <div className="cart">
      <div className="itmes">
        <h2>My Cart</h2>
        {
          cartItems.map((item) => (
            <div className="singleCartItem">
              <div className="top">
                <img src={item.data.image} alt={item.title} />
              </div>
              <h3>{item.data.title}</h3>
              <p> Rs. {item.data.price}</p>

              <div className="increment_decrement">
                <button onClick={() => handleAddQuantity(item.id)}>+</button>
                <p>{item.data.quantity}</p>
                <button onClick={() => handleLessQuantity(item.id)}>-</button>
              </div>
              <button className="remove" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))
        }
      </div>
      <div className="cartTotal">
        <h2>Price Details</h2>
        <div className="priceTotal">
          <h3>Price ( items)</h3>
          <p>Rs. 352</p>
        </div>
        <div className="discount">
          <h3>Discount</h3>
          <p>Rs. 352</p>
        </div>
        <div className="dilevery">
          <h3>Dilevery Charges</h3>
          <p>Free</p>
        </div>
        <div className="otalAmount">
          <h3>Total Amount</h3>
          <p>Rs. 352</p>
        </div>
        <button>Check Out</button>
      </div>
    </div>
  )
}

export default Cart
