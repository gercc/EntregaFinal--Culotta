import React, { useState, useEffect } from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import Spinner from '../../components/Spinner/Spinner'


const HomePage = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);


  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "15px" }}>Bienvenido a Tiki Store</h1>
      {loading ? (
        <div className='container d-flex justify-content-center align-items-center my-5'>
          <Spinner />
        </div>
      ) : (
        <ItemListContainer />
      )}
    </div>
  )
}

export default HomePage