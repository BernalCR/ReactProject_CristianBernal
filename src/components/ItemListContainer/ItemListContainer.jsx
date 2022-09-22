import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
//import Products from '../../Products';
import Loader from '../Loader/Loader';
import { getProducts } from '../../firebase/firebase';



const ItemListContainer = () => { 
    const [prodList, setProdList] = useState([]); 
    const {category} = useParams(); 

    /*const getProducts = () => new Promise ((res,rej) => {
        if(category){
            setTimeout(() =>res(Products.filter(product => product.category.toLowerCase() == category)), 1000);  
        }else{
            setTimeout(() => res(Products), 1000);
        }
        
    });*/
      
    
    useEffect(() => {
        /*getProducts()
        .then(data => setProdList(data))
        .catch(error => console.error(error))*/

        getProducts(category).then(data => setProdList(data))
        return () =>{setProdList([])}
    }, [category]);
    

    return (prodList.length ? <ItemList prodList={prodList} /> : <Loader/>)
}

export default ItemListContainer;

