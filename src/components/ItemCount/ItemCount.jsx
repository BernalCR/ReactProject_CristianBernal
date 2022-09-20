import './ItemCount.css'
import {useState} from "react";

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(0)

    const add = () =>{
        if(count < stock){
            setCount(count + 1 )
        }
    }

    const remove = () =>{
        if(count > 0){
            setCount(count - 1 )
        }
    }

    const addToCart = () =>{
        onAdd(count)
        setCount(0);
    }

    return (
        <>
            <div className='boxBtns'>
                <button className="addBtn" onClick={add}>+</button>
                <p>{count}</p>
                <button className="removeBtn" onClick={remove}>-</button>
            </div>

            <button className="shopBtn" onClick={addToCart}>ADD TO CART</button>
        </>
    );
}

export default ItemCount;
