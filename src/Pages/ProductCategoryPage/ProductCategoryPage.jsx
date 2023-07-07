import React, { useState, useEffect } from 'react'
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig'
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';

const ProductCategoryPage = () => {
  const { category } = useParams();
  const [productosCategory, setProductosCategory] = useState([]);

  useEffect(() => {
    const getProducto = async () => {
      const q = query(collection(db, "products"), where("category", "==", category));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id })
      });
      setProductosCategory(docs);
    }
    getProducto()
  }, [category]);

  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "55px", paddingBottom: "30px" }}>
        {category.toUpperCase()}
      </h1>
      <div className='container d-flex justify-content-center align-items-center'>
        {productosCategory.map((producto) => (
          <div key={producto.id}>
            <ItemDetailContainer data={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryPage