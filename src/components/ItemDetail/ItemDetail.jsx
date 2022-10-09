import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


const ItemDetail = ({item}) => {        
    const { cart, addItem } = useContext(CartContext);


    //Funcion que se activa cuando se agrega un elemento al carrito
    const onAdd = (cant) =>{
        addItem(item, cant);
        item.stock -= cant;
    }
    
    return (
        <div className="display_flex" id="ecommRow">
            <div className="display_flex flex_center"><img src={item.image.src} alt={item.image.alt} /></div>

            <div>
                <h2>{item.name}</h2>
                <p>{item.category}</p>
                <p>Price: {item.price}$</p>
                <p>stock: {item.stock}</p>
                <br/>
                <p>{item.description}</p>
                <br/>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail;
