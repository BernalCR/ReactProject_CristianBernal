import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import { getProducts } from '../../firebase/firebase';

const ItemListContainer = () => { 
    const [prodList, setProdList] = useState([]); 
    const {category} = useParams(); 
    
    useEffect(() => {
        getProducts(category).then(data => setProdList(data))
        return () =>{setProdList([])}
    }, [category]);
    

    return (prodList.length ? <ItemList prodList={prodList} /> : <Loader/>)
}

export default ItemListContainer;

