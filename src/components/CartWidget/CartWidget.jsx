import './CartWidget.css'
import {MdOutlineShoppingCart} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


const CartWidget = () => {
    const { getQuantity } = useContext(CartContext);

    return (
        <div id='cartIconBox' className='display_flex a_i_center'>
            <Link to="/cart"><MdOutlineShoppingCart id="cartIcon"/></Link>
            <p style={{color: "#fff"}}>{getQuantity()}</p>
        </div>  
    );
}

export default CartWidget;
