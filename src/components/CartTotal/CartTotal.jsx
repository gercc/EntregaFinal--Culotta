import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'


const CartTotal = () => {
    const {total, clearCart } = useContext(CartContext)

  return (
    <div>
        <h3>
            Total a pagar: ${total.toLocaleString()}
        </h3>
        <button className="btn btn-danger" onClick={clearCart}>Vaciar Carrito</button>
    </div>
  )
}

export default CartTotal