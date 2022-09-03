import { React, useState, useEffect } from 'react'
import Products from '../../Products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const getProduct = access => new Promise ((res,rej) => access ? res(Products.find(prod => prod.id === 1)) : rej("Acceso denegado")) 

    useEffect(() => {
        getProduct(true)
        .then(data => {
            setItem(data)
        })
        .catch(error => {
            console.error(error)
        })  
    }, [])
    
    return (
        <ItemDetail item={item}/>
    ) 
}

export default ItemDetailContainer; 