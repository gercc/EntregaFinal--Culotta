import React, { createContext, useState, useEffect, } from 'react';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const getProductos = async () => {
      const q = query(collection(db, "products"));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs);
    };
    getProductos();
  }, []);


  const agregarAlCarrito = (product, count) => {
    const newObj = {
       ...product,
      count
    }
    setCart([...cart, newObj])
  }
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(producto => producto.id !== productId));
  };
   const clearCart = () =>{
    setCart([])
   }
  const total = cart.reduce((acumulativo, elemento) => acumulativo + elemento.price * elemento.count, 0)

  const totalQuantity = cart.reduce((acumulativo, elemento) => acumulativo + elemento.count, 0)

  return (
    <CartContext.Provider value={{ productos, cart, setCart, agregarAlCarrito, handleRemoveFromCart, total, totalQuantity, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;