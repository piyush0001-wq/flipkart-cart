import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <div className="header">
      <div className="logo_search">
        <div className="logo">
          <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart" />
          <p>Explore<span> Plus +</span></p>
        </div>
        <div className="search">
          <input type="text" placeholder="search for products, brands and more" />
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div className="account">
        <button>Login</button>
        <p>More <i class="fas fa-angle-down"></i></p>
        <Link to="/cart">
          <p><i class="fas fa-shopping-cart"></i> Cart</p>
        </Link>
      </div>
    </div>
  )
}

export default Header
