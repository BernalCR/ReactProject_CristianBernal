import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({item}) => {        
    const {name, type, price, stock, image ={}, description} = item;

    return (
        <div className="display_flex" id="ecommRow">
            <div className="display_flex flex_center"><img src={image.src} alt={image.alt} /></div>

            <div>
                <h2>{name}</h2>
                <p>{type}</p>
                <p>Price: {price}</p>
                <p>stock: {stock}</p>
                <br/>
                <p>{description}</p>
                <br/>
                <ItemCount stock={stock}/>
            </div>
        </div>
    )
}

export default ItemDetail;
