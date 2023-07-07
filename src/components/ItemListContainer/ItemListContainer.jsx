import React, { useContext } from 'react';
import ItemList from '../ItemList/ItemList'
import { CartContext } from '../CartContext/CartContext'
import './ItemListContainer.css'


const ItemListContainer = () => {

  const { productos } = useContext(CartContext)

  return (
    <div>
      <div className='container d-flex justify-content-center align-items-center'>
        <div className='row'>
          {productos.map((producto) => (
            <div className='col-md-4 my-4' key={producto.id}>
              <ItemList data={producto} url={`/item/${producto.id}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;