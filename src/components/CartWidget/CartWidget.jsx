import './CartWidget.css'
import {MdOutlineShoppingCart} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
        (cart.length > 0) && <Link to="/cart"><MdOutlineShoppingCart id="cartIcon"/></Link>  
    );
}

export default CartWidget;
