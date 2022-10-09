
import React, {createContext, useState} from 'react';

export const CartContext = createContext();

//Este componente crea todo el contexto referente al carrito
const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([]);

    //Agrega producto al carrito
    const addItem = (product, cant) =>{
        const pFound = cart.find(item => item.id == product.id);

        if(pFound){
            pFound.cant += cant;
            setCart([...cart])
        }else{
            let pToCart = {...product, cant: cant}
            delete pToCart.description;
            setCart([...cart, pToCart])
        }
    }

    //borra elemento del carrito
    const removeItem = (id) =>{
        const newCart = cart.filter(item => item.id != id)
        setCart(newCart)
    }

    //Limpia el carrito
    const clear = () =>{
        setCart([])
    }

    //Obtiene el monto a pagar del carrito
    const getTotal = () =>{
        let totalAmount = cart.reduce((acc, item) => acc + (item.price * item.cant), 0);
        return totalAmount;
    }

    //Retorna la cantidad de items que tiene el carrito
    const getQuantity = () =>{
        let quantity = 0;
        cart.forEach(item => quantity += item.cant);
        return quantity;
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, getTotal, getQuantity}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;