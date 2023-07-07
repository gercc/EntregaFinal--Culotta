import React, { useContext, useState } from 'react';
import { CartContext } from '../../components/CartContext/CartContext'
import './ItemDetailContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const ItemDetailContainer = ({ data }) => {
  const [added, setAdded] = useState(false)
  const { agregarAlCarrito } = useContext(CartContext)
 
  const onAdd = (count) => {
    agregarAlCarrito(data, count)
    setAdded(true)
  }
  
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className="col-md-8">
        <div className='card text-center'>
          <img className='card-img-top img-fluid' src={data.img} alt={data.alt} />
          <div className='card-body'>
            <h3 className='card-title'>{data && data.product}</h3>
            <p className='card-text text-secondary py-3'>
              {data && data.description}
            </p>
            <div className='py-2'>
              <ul>
                <li className='py-2'>{data.feature1}</li>
                <li className='py-2'>{data.feature2}</li>
                <li className='py-2'>{data.feature3}</li>
                <li className='py-2'>{data.feature4}</li>
              </ul>
            </div>
            <button className="btn btn-outline-secondary rounded-0 btn-lg mt-2">${data.price.toLocaleString()}</button>
            <div className="container text-center">
            {added ? <Link to="/cart">Ir al carrito</Link> : <ItemCount inicial={1} onAdd={onAdd} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemDetailContainer