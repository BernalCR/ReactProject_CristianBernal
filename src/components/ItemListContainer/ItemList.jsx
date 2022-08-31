import { React, useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import Items from './Items';
import './ItemList.css'

const callPromise = access => new Promise ((res,rej) => access ? res(Items) : rej("Acceso denegado"));

const ItemList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        callPromise(true)
        .then(data => {
            const itemsJSX = data.map(({name, price, stock, image}, i) =>
                <div className="card_product" key={i}>
                    <img className="img_card" src={image.src} alt={image.alt}/>
                    <div>
                        <p>{name}</p>
                        <p>price: {price}</p>
                        <p>Stock: {stock}</p>
                
                        <ItemCount stock={stock}/>
                    </div>  
                </div> 
            )
            setProducts(itemsJSX)
        })
        .catch(error => {
            console.error(error)
        })
    }, []);

    return (
        <>{products}</>
    )
}

export default ItemList;
