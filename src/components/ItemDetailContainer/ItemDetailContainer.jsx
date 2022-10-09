import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import { getProduct } from '../../firebase/firebase';

const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const {id} = useParams()
  
    //Pedimos la informacion del producto a la base de datos y mientras no llegue muestra el loader
    useEffect(() => {
        getProduct(id).then(data => setItem(data))
    }, [])
    
    return (item ? <ItemDetail item={item}/> : <Loader/>) 
}

export default ItemDetailContainer; 