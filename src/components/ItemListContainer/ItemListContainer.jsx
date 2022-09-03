import { React, useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import Products from '../../Products';

const ItemListContainer = () => {    
    const getProducts = access => new Promise ((res,rej) => access ? res(Products) : rej("Acceso denegado"));  
      
    const [prodList, setProdList] = useState([])
    useEffect(() => {
        getProducts(true)
        .then(data => {
            setProdList(data)
        })
        .catch(error => {
            console.error(error)
        })
    }, []);
    

    return (
        <ItemList prodList={prodList} />
    );
}

export default ItemListContainer;

