import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'
import Spinner from '../../components/Spinner/Spinner'
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig'

const ItemPage = () => {
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true);

  const { id } = useParams()

  useEffect(() => {
    const getProducto = async () => {
      const q = query(collection(db, "products"), where(documentId(), "==", id));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      });
      setProducto(docs);
    }
    getProducto()
  }, [id]);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "55px", paddingBottom: "30px" }}>
        Detalles del producto
      </h1>
      {loading ? (
        <div className='container d-flex justify-content-center align-items-center my-5'>
          <Spinner />
        </div>
      ) : (
        (
          producto.map((producto) => (
            <div className='container d-flex justify-content-center align-items-center' key={producto.id}>
              <div className='col-md-8 my-5'>
                <ItemDetailContainer data={producto} key={producto.id} />
              </div>
            </div>
          ))
        )
      )}
    </div>
  )
}

export default ItemPage