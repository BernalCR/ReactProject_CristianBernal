import './ItemCount.css'
import {useState} from "react";
import { pAddedToast } from '../Toast/Toast';

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    //Subir uno al contador
    const add = () =>{
        if(count < stock){
            setCount(count + 1 )
        }
    }

    //Bajar uno al contador
    const remove = () =>{
        if(count > 1){
            setCount(count - 1 )
        }
    }

    //Agregar la cantidad de elementos que haya en el contador al carrito
    const addToCart = () =>{
        onAdd(count);
        pAddedToast();
        setCount(0);
    }

    //El return condicional es para que si el stock del producto es igual a 0 muertre un el mensaje que informe que no hay stock
    return (

        (stock) ? (
                <>
                    <div className='boxBtns'>
                        <button className="addBtn" onClick={add}>+</button>
                        <p>{count}</p>
                        <button className="removeBtn" onClick={remove}>-</button>
                    </div>

                    <button className="shopBtn" onClick={addToCart}>ADD TO CART</button>
                </>
            ) : (
                <div className="shopBtn">SOLD OUT</div>
            )


    );
}

export default ItemCount;
