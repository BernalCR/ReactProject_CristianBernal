
import { React, useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import Products from '../../Products';

const ItemListContainer = () => {    
    const callPromise = access => new Promise ((res,rej) => access ? res(Products) : rej("Acceso denegado"));  
      
    const [prodState, setProdState] = useState([])
    useEffect(() => {
        callPromise(true)
        .then(data => {
            setProdState(data)
        })
        .catch(error => {
            console.error(error)
        })

       
    }, []);
    return (
        <ItemList prodList={prodState} />
    );
}

export default ItemListContainer;
