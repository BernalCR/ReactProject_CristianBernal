import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import './Cart.css'

const Cart = () => {
    const { cart, clear, getTotal } = useContext(CartContext);

    

    return (
        <div id="cartContainer">
            {
                (cart.length) ? (
                <>
                <div className="display_flex j_c_space_between a_i_center">
                    <h1>Shopping Cart</h1>
                    <button onClick={clear}>CLEAR CART</button>
                </div>

                <hr/>

                <div id="cartContent" className="display_flex j_c_space_between a_i_flex_start">
                    <div id="cartBox">
                        <div className="itemCart_row display_flex j_c_space_between a_i_center">
                            <div className="imgCart"></div>
                            <div className="info_itemCart">Description</div>
                            <div className="totalCost_item">Total</div>
                        </div>
                        {cart.map(item => <ItemCart key={item.id} item={item} />)}
                    </div>

                    <div id="checkoutBox">
                        <p>Subtotal: {getTotal}$</p>
                    </div>
                </div>
                </>

                ) : (
                    <div id="emptyCart" className="display_flex flex_center">
                        <p>Your Cart is empty.</p>
                        <Link to="/">Continue shopping.</Link>
                    </div>
                )
            }
        </div>
    );
}

export default Cart;
