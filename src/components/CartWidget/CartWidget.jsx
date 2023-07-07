import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext'

import '../CartWidget/CartWidget.css';

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  return (
    <div className="cart-widget">
      <Link to="/cart">
      <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
      </Link>
      <div className="qty-display">{totalQuantity}</div>
    </div>
  );
};

export default CartWidget;

