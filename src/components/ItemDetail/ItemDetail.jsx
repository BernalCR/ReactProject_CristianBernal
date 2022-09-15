import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { Link } from "react-router-dom";
import UseCount from '../ItemCount/useCount'
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemDetail = ({item}) => {        
    const {name, category, price, stock, image ={}, description} = item;
    const {add, remove, count} = UseCount(stock);
    const { addP } = useContext(CartContext);
    return (
        <div className="display_flex" id="ecommRow">
            <div className="display_flex flex_center"><img src={`../images/${image.src}`} alt={image.alt} /></div>

            <div>
                <h2>{name}</h2>
                <p>{category}</p>
                <p>Price: {price}</p>
                <p>stock: {stock}</p>
                <br/>
                <p>{description}</p>
                <br/>
                <div className='boxBtns'>
                    <button className="addBtn" onClick={add}>+</button>
                    <p>{count}</p>
                    <button className="removeBtn" onClick={remove}>-</button>
                </div>
                <Link to="/cart" className="shopBtn">GO TO CART</Link>
                <button  className="shopBtn" onClick={() => addP(item, count)}>BUY NOW</button>
            </div>
        </div>
    )
}

export default ItemDetail;
