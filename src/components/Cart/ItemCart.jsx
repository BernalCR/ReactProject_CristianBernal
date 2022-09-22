import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemCart = ({item}) => {
    const {id, name, category, price, image, cant} = item;
    const { removeItem } = useContext(CartContext);

    let totalItem = price * cant;

    return (
        <div className="itemCart_row display_flex j_c_space_between a_i_center">
            <div className="imgCart"><img src={image.src} alt={image.alt}/></div>

            <div className="info_itemCart">
                <p>{name}</p>
                <p>{category}</p>
                <p>Quantity: {cant}</p>
                <p>Price: {price}$</p>

                <button onClick={() => removeItem(id)}>ELIMINAR</button>
            </div>

            <div className="totalCost_item">
                <p>{totalItem}$</p>
            </div>
        </div> 
    );
}

export default ItemCart;
