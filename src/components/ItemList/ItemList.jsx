import * as React from 'react';
import { Link } from 'react-router-dom'

const ItemList = ({ data, url, alt}) => {


  return (
    <div className='card text-center'>
      <img className='card-img-top img-fluid' src={data.img} alt={alt} />
      <div className='card-body'>
        <h3 className='card-title'>{data && data.product}</h3>
        <p className='card-text text-secondary'>
          {data && data.description}
        </p>
        <Link to={url}>
          <button className="btn btn-outline-secondary rounded-0">Ver Más</button>
        </Link>
      </div>
    </div>
  );
}

export default ItemList