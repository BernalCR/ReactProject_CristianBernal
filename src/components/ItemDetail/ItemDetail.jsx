import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemDetail = ({item}) => {        
    const {name, category, price, stock, image ={}, description} = item;
    const { addItem } = useContext(CartContext);

    const onAdd = (cant) =>{
        addItem(item, cant);
    }
    

    return (
        <div className="display_flex" id="ecommRow">
            <div className="display_flex flex_center"><img src={image.src} alt={image.alt} /></div>

            <div>
                <h2>{name}</h2>
                <p>{category}</p>
                <p>Price: {price}$</p>
                <p>stock: {stock}</p>
                <br/>
                <p>{description}</p>
                <br/>
                <ItemCount stock={stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;
