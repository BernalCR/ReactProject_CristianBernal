
import React, {createContext, useState} from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([]);

    const addP = (product, cant) =>{
        const pFound = cart.find(item => item.id == product.id);

        if(pFound){
            console.log("ya estaba")
            pFound.cant += cant;
            setCart([...cart])
        }else{
            console.log("no estaba")
            const productCart = {id: product.id, cant: cant}
            setCart([...cart, productCart])
        }
    }
    console.log(cart);
 /*   const removeP = (id) =>{

    }
    const clearCart = () =>{

    }
*/
    return (
        <CartContext.Provider value={{addP}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;