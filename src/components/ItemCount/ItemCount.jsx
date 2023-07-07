import React, { useState } from 'react'


const ItemCount = ({ inicial, onAdd }) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center my-4"> 
      <h5>Cantidad: <button onClick={decrementar}>-</button> {contador} <button onClick={incrementar}>+</button></h5>
      </div>
      <div>
        <button onClick={() => onAdd(contador)} className="btn btn-primary btnContacto1" type="button">Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;