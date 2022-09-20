
import React, {createContext, useState} from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([    ]);

    const addItem = (product, cant) =>{
        const pFound = cart.find(item => item.id == product.id);

        if(pFound){
            console.log("ya estaba")
            pFound.cant += cant;
            setCart([...cart])
        }else{
            console.log("no estaba")
            let pToCart = {...product, cant: cant}
            delete pToCart.stock;
            delete pToCart.description;
            setCart([...cart, pToCart])
        }
    }

    const removeItem = (id) =>{
        const newCart = cart.filter(item => item.id != id)
        setCart(newCart)
    }
    const clear = () =>{
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;