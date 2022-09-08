import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Products from '../../Products';
import Loader from '../Loader/Loader';



const ItemListContainer = () => { 
    const [prodList, setProdList] = useState([]); 
    const {category} = useParams(); 

    const getProducts = () => new Promise ((res,rej) => {
        if(category){
            setTimeout(() =>res(Products.filter(product => product.category.toLowerCase() == category)), 2000);  
        }else{
            setTimeout(() => res(Products), 2000);
        }
        
    });
      
    
    useEffect(() => {
        getProducts()
        .then(data => setProdList(data))
        .catch(error => console.error(error))

        return () =>{setProdList([])}
    }, [category]);
    

    return (prodList.length ? <ItemList prodList={prodList} /> : <Loader/>)
}

export default ItemListContainer;

